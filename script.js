const menu = document.querySelector("#menu")
const nav = document.querySelector(".links")

menu.onclick =() => {
    menu.classList.toggle('bx-bx');
    nav.classList.toggle('active')
}