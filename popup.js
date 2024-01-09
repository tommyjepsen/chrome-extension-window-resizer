document.getElementById("custom").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: +document.getElementById("width").value,
      height: +document.getElementById("height").value,
    });
  });
});
document.getElementById("resize1920").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: 1920,
      height: 1080,
    });
  });
});
document.getElementById("resize1366").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: 1366,
      height: 768,
    });
  });
});
document.getElementById("resize1280").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: 1280,
      height: 1024,
    });
  });
});
document.getElementById("resize1024").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: 1024,
      height: 768,
    });
  });
});
document
  .getElementById("resizeiphone14")
  .addEventListener("click", async () => {
    chrome.windows.getCurrent({}, function (window) {
      chrome.windows.update(window.id, {
        width: 390,
        height: 844,
      });
    });
  });
document
  .getElementById("resizeiphone15")
  .addEventListener("click", async () => {
    chrome.windows.getCurrent({}, function (window) {
      chrome.windows.update(window.id, {
        width: 393,
        height: 852,
      });
    });
  });
document
  .getElementById("resizeiphone11xr")
  .addEventListener("click", async () => {
    chrome.windows.getCurrent({}, function (window) {
      chrome.windows.update(window.id, {
        width: 414,
        height: 896,
      });
    });
  });
document.getElementById("resize414").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: 414,
      height: 736,
    });
  });
});
document.getElementById("resize360").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: 360,
      height: 800,
    });
  });
});
document.getElementById("resize390").addEventListener("click", async () => {
  chrome.windows.getCurrent({}, function (window) {
    chrome.windows.update(window.id, {
      width: 390,
      height: 844,
    });
  });
});
