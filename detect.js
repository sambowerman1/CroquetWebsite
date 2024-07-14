// detect.js
if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = '/mobile'; // Redirect to the mobile version
}