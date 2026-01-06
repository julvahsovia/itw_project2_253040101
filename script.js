let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}