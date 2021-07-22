function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const phoneNum = document.createElement('div')
    phoneNum.textContent = 'Phone: 317-275-1984'

    const address = document.createElement('div')
    address.textContent = 'Address: 1819 Crestview Manor, Indianapolis, 46202'

    const location = document.createElement('img')
    location.src = 'images/location.png'
    location.alt = 'Restaurant location'
    location.style.width = '500px';
    location.style.height = '500px';

    contact.appendChild(phoneNum)
    contact.appendChild(address)
    contact.appendChild(location)
   
    return contact
}

function loadContact() {
    const pageContainer = document.getElementById('pageContainer')
    pageContainer.textContent = ''
    pageContainer.appendChild(createContact())
}

export { loadContact }