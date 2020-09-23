let nav = document.getElementById("navMenu");

let toggleIcon = document.getElementById("toggleIcon");
let lightswitch = document.getElementById("lightswitch");
let body = document.querySelector("body");
let header = document.querySelector("header");

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

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

document.onload(typeWriter());