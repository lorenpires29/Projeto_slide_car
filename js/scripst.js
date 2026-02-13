let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 

function setSlider() {
    // item ativo antigo
    let itemOld = container.querySelector('.list .item.active')
    if (itemOld) itemOld.classList.remove('active')

    // dot ativo antigo
    let dotsOld = indicator.querySelector('ul li.active')
    if (dotsOld) dotsOld.classList.remove('active')

    // novo item e dot
    items[active].classList.add('active')
    dots[active].classList.add('active')

    // indicador numérico
    indicator.querySelector('.number').innerHTML = 
        String(active + 1).padStart(2, '0')
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)

    active = active + 1 > lastPosition ? firstPosition : active + 1
    setSlider()
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)

    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
}
