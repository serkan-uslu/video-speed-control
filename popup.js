/* eslint-disable no-undef */

/**
 * Event listener for increasing the video playback speed.
 */
document.getElementById('increaseSpeed').addEventListener('click', function () {
  changePlaybackRate(0.5);
});

/**
 * Event listener for decreasing the video playback speed.
 */
document.getElementById('decreaseSpeed').addEventListener('click', function () {
  changePlaybackRate(-0.5);
});

/**
 * Event listener for resetting the video playback speed to normal.
 */
document.getElementById('resetSpeed').addEventListener('click', function () {
  resetPlaybackRate();
});

/**
 * Initializes the functionality once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  checkForVideo();
  updateSpeedDisplay();
});

/**
 * Changes the playback rate of the video.
 * @param {number} change - The amount to change the playback rate by.
 */
function changePlaybackRate(change) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: adjustPlaybackRate,
        args: [change],
      },
      (results) => {
        if (results && results[0] && results[0].result !== undefined) {
          document.getElementById('speedDisplay').innerText = results[0].result.toFixed(1) + 'x';
        }
      }
    );
  });
}

/**
 * Adjusts the playback rate of a video element on the current tab.
 * @param {number} change - The increment or decrement to the current playback rate.
 * @returns {number} The new playback rate after adjustment.
 */
function adjustPlaybackRate(change) {
  var video = document.querySelector('video');
  if (video) {
    video.playbackRate += change;
    return video.playbackRate;
  }
  return 1.0; // Default playback rate if no video is found or other issue occurs.
}

/**
 * Resets the playback rate of the video to normal (1.0x).
 */
function resetPlaybackRate() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: function () {
          var video = document.querySelector('video');
          if (video) {
            video.playbackRate = 1.0;
            return video.playbackRate;
          }
          return 1.0;
        },
      },
      (results) => {
        if (results && results[0] && results[0].result) {
          document.getElementById('speedDisplay').innerText = results[0].result.toFixed(1) + 'x';
        }
      }
    );
  });
}

/**
 * Checks if a video element is present on the current page.
 * Updates the UI based on the presence of a video.
 */
function checkForVideo() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: function () {
          return !!document.querySelector('video');
        },
      },
      function (results) {
        const videoFound = results[0].result;
        const statusDisplay = document.getElementById('videoStatus');
        const controls = document.getElementById('controls');

        if (videoFound) {
          statusDisplay.innerHTML =
            '<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">Bu sayfada video tespit edildi.</div>';
          controls.style.display = 'block';
        } else {
          statusDisplay.innerHTML =
            '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">Bu sayfada video bulunamadı.</div>';
          controls.style.display = 'none';
        }
      }
    );
  });
}

/**
 * Updates the speed display to the current playback rate.
 */
function updateSpeedDisplay() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: function () {
          var video = document.querySelector('video');
          return video ? video.playbackRate : 1.0;
        },
      },
      (results) => {
        if (results && results[0] && results[0].result !== undefined) {
          document.getElementById('speedDisplay').innerText = results[0].result.toFixed(1) + 'x';
        }
      }
    );
  });
}
