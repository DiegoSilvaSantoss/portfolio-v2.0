const buttonMenu = document.querySelector('.button-lateral')
const menuLateral = document.querySelector('.menu-lateral')
const ul = document.querySelector('ul')



buttonMenu.addEventListener('click', () => {

    buttonMenu.classList.toggle('active')
    menuLateral.classList.toggle('active')
    ul.classList.toggle('active')
})