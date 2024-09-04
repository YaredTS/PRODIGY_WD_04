let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}

