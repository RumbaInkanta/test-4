let field = document.createElement('div')
document.body.appendChild(field)
field.classList.add('field')

for (let i = 0; i < 64; i++) {
    const excel = document.createElement('div')
    field.appendChild(excel)
    excel.classList.add('excel')
}

let excel = document.querySelectorAll('.excel')
let x = 1, y = 8
for (let i = 0; i < excel.length; i++) {
    if (x > 8) {
        x = 1
        y--        
    }
    excel[i].setAttribute('posX',x)
    excel[i].setAttribute('posY',y)
    x++
    //красим поле
    if ((x % 2 == 0 && y % 2 == 0) || (x % 2 != 0 && y % 2 != 0)) {
        excel[i].style.backgroundColor = '#fff'
    } else {
        excel[i].style.backgroundColor = '#ccc'
    }
    excel[i].addEventListener('click', current)
}

function current(event) {
    for (let i = 0; i < excel.length; i++) {
        excel[i].classList.remove('current')//снимаем выделение
    }
    current = event.target
    current.classList.add('current')//выделяем элемент

    let currentX = current.getAttribute('posX')
    let currentY = current.getAttribute('posY')
    step(currentX, currentY)
}

function step(currentX, currentY) {
    let vars = [document.querySelector('[posX="' + (+currentX + 1) + '"][posY="' + (+currentY + 2) + '"]'),
                document.querySelector('[posX="' + (+currentX + 1) + '"][posY="' + (+currentY - 2) + '"]'),
                document.querySelector('[posX="' + (+currentX - 1) + '"][posY="' + (+currentY + 2) + '"]'),
                document.querySelector('[posX="' + (+currentX - 1) + '"][posY="' + (+currentY - 2) + '"]'),
                document.querySelector('[posX="' + (+currentX + 2) + '"][posY="' + (+currentY + 1) + '"]'),
                document.querySelector('[posX="' + (+currentX + 2) + '"][posY="' + (+currentY - 1) + '"]'),
                document.querySelector('[posX="' + (+currentX - 2) + '"][posY="' + (+currentY + 1) + '"]'),
                document.querySelector('[posX="' + (+currentX - 2) + '"][posY="' + (+currentY - 1) + '"]')]
    console.log(vars)
}
