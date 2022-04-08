const menubutton = document.getElementById('menu')
const navlist = document.getElementById('ul')

function toggleButton(){
    navlist.classList.toggle('show')
}

menubutton.addEventListener('click', toggleButton)