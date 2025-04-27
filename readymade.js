// pre loader

  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader-thilak2');
    const mainContent = document.getElementById('main-content');

    // ⏱️ Set timeout to control delay (3000 = 3 sec)
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.style.opacity = '1';
      }, 500); // wait for fade out
    }, 3000);
  });


// pre loader


// connection
 
const offlinePage = document.getElementById("offline-page");
const mainContent = document.getElementById("main-content");

function updateOnlineStatus() {
  if (navigator.onLine) {
    offlinePage.style.display = "none";
    mainContent.style.display = "block";
  } else {
    offlinePage.style.display = "flex";
    mainContent.style.display = "none";
  }
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
updateOnlineStatus();

// connection









