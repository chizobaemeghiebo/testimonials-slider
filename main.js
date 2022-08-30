const next = document.querySelector('.next-btn')
const prev = document.querySelector('.prev-btn')
const personTwo = document.querySelector('.person2')
const personOne = document.querySelector('.person1')
const btns = document.querySelector('.slider-btns')
next.addEventListener('click', () => {
  personTwo.classList.add('active')
  personOne.classList.add('notactive')
  btns.classList.remove('high')
  btns.classList.add('low')
})

prev.addEventListener('click', () => {
  personTwo.classList.remove('active')
  personOne.classList.remove('notactive')
  btns.classList.add('high')
  btns.classList.remove('low')
})
