function createHome() {
    const home = document.createElement('div')
    home.classList.add('home')
    
    //const imgLogo = document.createElement('img')
    //imgLogo.classList.add('logo')
    //imgLogo.src = 'images/logo.png'

    home.appendChild(createParagraph('Best burgers in town since 1920'), 'normal-font')
    home.appendChild(createParagraph('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt vestibulum massa, et rhoncus odio blandit sed. Integer maximus quam eu neque imperdiet pretium. Sed gravida ligula elit, id dapibus leo hendrerit nec. Nunc fermentum vitae nulla vel placerat. Sed ac eleifend ex, quis feugiat dui. Vivamus lobortis eros eu risus sagittis, at mollis tortor rhoncus. Quisque semper, dolor sed pulvinar dapibus, risus ipsum eleifend risus, ac elementum magna sapien vitae lorem.', 'small-font'))
    home.appendChild(createParagraph('Visit us or order online!'), 'normal-font')

    return home
}

function createParagraph(text, font) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.classList.add(font)

    return paragraph;
  }

function loadHome() {
    const pageContainer = document.getElementById('pageContainer')
    pageContainer.textContent = ''
    pageContainer.appendChild(createHome())
}

export { loadHome }