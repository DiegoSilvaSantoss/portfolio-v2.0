const buttonMenu = document.querySelector('.button-lateral')
const menuLateral = document.querySelector('.menu-lateral')
const ul = document.querySelector('ul')
const background = document.querySelector('.background')
const body = document.querySelector('body')



buttonMenu.addEventListener('click', () => {

    buttonMenu.classList.toggle('active')
    menuLateral.classList.toggle('active')
    ul.classList.toggle('active')
    background.classList.toggle('active')
    body.classList.toggle('active')
})

background.addEventListener('click', () => {

    buttonMenu.classList.remove('active')
    menuLateral.classList.remove('active')
    ul.classList.remove('active')
    background.classList.remove('active')
    body.classList.remove('active')
})