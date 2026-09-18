let currentData = null;

const fileInput = document.getElementById('fileInput');
const fillBtn = document.getElementById('fillBtn');
const statusEl = document.getElementById('status');
const logEl = document.getElementById('log');

// Popups are destroyed every time they close, so remember the loaded file in
// chrome.storage.local instead of a plain JS variable - otherwise picking the
// file once wouldn't carry over to the next sub-page (facts/reference/rubric).
chrome.storage.local.get(['millieData', 'millieFileName'], (res) => {
  if (res.millieData) {
    currentData = res.millieData;
    fillBtn.disabled = false;
    statusEl.textContent = `Loaded ${res.millieFileName || 'saved file'} (remembered from before)`;
  }
});

fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    currentData = JSON.parse(text);
    chrome.storage.local.set({ millieData: currentData, millieFileName: file.name });
    statusEl.textContent = `Loaded ${file.name}`;
    fillBtn.disabled = false;
  } catch (err) {
    statusEl.textContent = 'Invalid JSON: ' + err.message;
    fillBtn.disabled = true;
  }
});

fillBtn.addEventListener('click', async () => {
  if (!currentData) {
    statusEl.textContent = 'Choose a JSON file first.';
    return;
  }
  statusEl.textContent = 'Filling...';
  logEl.value = '';
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url || !tab.url.includes('experts.afterquery.com/projects/millie/tasks/')) {
    statusEl.textContent = 'Open a Millie task workspace tab first.';
    return;
  }
  chrome.tabs.sendMessage(tab.id, { type: 'FILL', data: currentData }, (resp) => {
    if (chrome.runtime.lastError) {
      statusEl.textContent = 'Error: ' + chrome.runtime.lastError.message + ' (reload the tab and try again)';
      return;
    }
    const log = (resp && resp.log) || [];
    const missing = log.filter((l) => l.startsWith('MISSING')).length;
    statusEl.textContent = missing
      ? `Done, ${missing} field(s) not found - check the log.`
      : 'Done, all fields filled. Review, then click Save draft on the page.';
    logEl.value = log.join('\n');
  });
});
