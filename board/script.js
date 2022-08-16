const board = document.querySelector('#board')
const SQUARES_NUMBERS = 638
const colors = ['#E4684E', '#E4D04E', '#43D13F', '#3F9AD1', '#953FD1', '#D13F86']


for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })
  board.append(square)
  
}
function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}