/**
 * Dynamically loads a JavaScript file.
 * @param {string} src - The path of the script to load.
 */
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
}

// Load common scripts
loadScript('js/storage.js');
loadScript('js/ui.js');
loadScript('js/app.js');

// Load page-specific scripts
const page = window.location.pathname.split('/').pop();

if (page === 'details.html') {
    loadScript('js/details.js');
} else if (page === 'update.html') {
    loadScript('js/update.js');
}
