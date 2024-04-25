/* eslint-disable no-undef */
document.getElementById('increaseSpeed').addEventListener('click', function () {
  changePlaybackRate(0.5)
})

document.getElementById('decreaseSpeed').addEventListener('click', function () {
  changePlaybackRate(-0.5)
})

document.getElementById('resetSpeed').addEventListener('click', function () {
  resetPlaybackRate()
})

document.addEventListener('DOMContentLoaded', function () {
  checkForVideo()
})

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
          document.getElementById('speedDisplay').innerText = results[0].result.toFixed(1)
        }
      }
    )
  })
}

function adjustPlaybackRate(change) {
  var video = document.querySelector('video')
  if (video) {
    video.playbackRate += change
    return video.playbackRate
  }
  return 1.0 // Default playback rate if no video is found or other issue occurs.
}

function resetPlaybackRate() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: function () {
          var video = document.querySelector('video')
          if (video) {
            video.playbackRate = 1.0
            return video.playbackRate
          }
          return 1.0
        },
      },
      (results) => {
        if (results && results[0] && results[0].result !== undefined) {
          document.getElementById('speedDisplay').innerText = results[0].result.toFixed(1)
        }
      }
    )
  })
}

function checkForVideo() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: function () {
          return !!document.querySelector('video')
        },
      },
      function (results) {
        const videoFound = results[0].result
        const statusDisplay = document.getElementById('videoStatus')
        const controls = document.getElementById('controls')

        if (videoFound) {
          statusDisplay.innerHTML =
            '<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">Sayfada video bulundu.</div>'
          controls.style.display = 'block'
        } else {
          statusDisplay.innerHTML =
            '<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">Sayfada video bulunamadı.</div>'
          controls.style.display = 'none'
        }
      }
    )
  })
}
