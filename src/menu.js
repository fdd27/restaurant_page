function createMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')

    menu.appendChild(
        createMenuItem(
            'Hamburger',
            'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard'
        )
    )

    menu.appendChild(
        createMenuItem(
            'Cheeseburger',
            'Beef Patty, Cheddar Cheese, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard'
        )
    )

    menu.appendChild(
        createMenuItem(
            'Double Cheeseburger',
            'Double Beef Patty, Cheddar Cheese, Grilled Onions & Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard'
        )
    )

    menu.appendChild(
        createMenuItem(
            'French Fries',
            'French Fries, Salt, Mayo or Ketchup'
        )
    )

    menu.appendChild(
        createMenuItem(
            'Steak',
            'A thick center cut (300gr) steak from the tender short loin, seasoned and chargrilled'
        )
    )

    menu.appendChild(
        createMenuItem(
            'Hamburger',
            'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard'
        )
    )

    menu.appendChild(
        createMenuItem(
            'Hamburger',
            'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard'
        )
    )

    menu.appendChild(
        createMenuItem(
            'Hamburger',
            'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard'
        )
    )

    menu.appendChild(
        createMenuItem(
            'Hamburger',
            'Beef Patty, Onions, Tomatoes, Pickles, Lettuce, Ketchup, Mayo, Mustard'
        )
    )
    
    return menu
}

function createMenuItem(name, desc) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const foodName = document.createElement('h2')
    foodName.textContent = name

    const foodDesc = document.createElement('p')
    foodDesc.textContent = desc

    const foodImg = document.createElement('img')
    foodImg.src = `images/burgers/${name.toLowerCase()}.png`
    foodImg.alt = `${name}`

    menuItem.appendChild(foodImg)
    menuItem.appendChild(foodName)
    menuItem.appendChild(foodDesc)

    return menuItem
}

function loadMenu() {
    const pageContainer = document.getElementById('pageContainer')
    pageContainer.textContent = ''
    pageContainer.appendChild(createMenu())
}

export { loadMenu }