let nav = document.getElementById("navMenu");

let toggleIcon = document.getElementById("toggleIcon");
let lightswitch = document.getElementById("lightswitch");
let body = document.querySelector("body");
let header = document.querySelector("header");
let scrollButton = document.getElementById("scrollButton");

function toggleNav() {
    nav.classList.toggle("hidden");

    toggleIcon.classList.toggle("fa-window-close");
    toggleIcon.classList.toggle("fa-bars");
}

function toggleLight() {
    if (lightswitch.innerHTML == "🌚") {
        lightswitch.innerHTML = "🌞";
    }
    else {
        lightswitch.innerHTML = "🌚";
    }

    let bodyClass = body.className;
    body.className = bodyClass === "lm" ? "dm" : "lm";

    let headerClass = header.className;
    header.className = headerClass === "lm" ? "dm" : "lm";
}

window.onscroll = function () { DetectScroll() };

function DetectScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    }
    else {
        scrollButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTopOfPage() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}