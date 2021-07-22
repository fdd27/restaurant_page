//Import the functions for generating the rest of the pages
import { loadHome } from './home'
import { loadMenu } from './menu'
import { loadContact } from './contact'
//import { container } from 'webpack'

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')
    header.innerText = 'Burger Spot'
    header.appendChild(createNav())

    return header
}


function createNav() {
    const nav = document.createElement('nav')
    nav.classList.add('nav')

    //Create nav buttons
    const btnHome = document.createElement('button')
    const btnMenu = document.createElement('button')
    const btnContant = document.createElement('button')

    //Assign nav buttons a class
    btnHome.classList.add('button-nav')
    btnMenu.classList.add('button-nav')
    btnContant.classList.add('button-nav')

    //Put text on nav buttons
    btnHome.innerText = 'Home'
    btnMenu.innerText = 'Menu'
    btnContant.innerText = 'Contact'

    //Put event listeners on nav buttons
    btnHome.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return
        setActiveButton(btnHome)
        loadHome()
    })
    btnMenu.addEventListener('click',  (e) => {
        if (e.target.classList.contains('active')) return
        setActiveButton(btnMenu)
        loadMenu()
    })
    btnContant.addEventListener('click',  (e) => {
        if (e.target.classList.contains('active')) return
        setActiveButton(btnContant)
        loadContact()
    })

    //Add nav buttons to nav
    nav.appendChild(btnHome)
    nav.appendChild(btnMenu)
    nav.appendChild(btnContant)

    return nav
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.button-nav')

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active')
        }
    })

    button.classList.add('active')
}

function createPageContainer() {
    const pageContainer = document.createElement('div')
    pageContainer.classList.add('pageContainer')
    pageContainer.setAttribute('id', 'pageContainer')

    return pageContainer
}

function initializeWebsite() {
    const content = document.getElementById('content')

    content.appendChild(createHeader())
    content.appendChild(createPageContainer())

    setActiveButton(document.querySelector('.button-nav'))
    loadHome()
} 

export default initializeWebsite