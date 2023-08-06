/* The DOMContentLoaded event fires as soon as the DOM hierarchy has been fully constructed. It doesn't wait for external resources like images to load. This makes it faster than window.onload */

document.addEventListener('DOMContentLoaded', function () {
    // code here
});


/* use defer attribute in the <script> tag to ensure that your script is executed after the HTML is parsed, but before the DOMContentLoaded event. This can improve page load performance because the browser can continue parsing the HTML while the script is being fetched and executed. */

// <script src="your-script.js" defer></script>



/*  ES6 modules provide a clean way to structure and import/export JavaScript code. When you use the type="module" attribute, your JavaScript code is automatically deferred and executed after the DOM has loaded. */

// <script type="module" src="your-module.js"></script>

