const modal_help = document.querySelector('.modal_help')
const modal_filtr = document.querySelector('.modal_filtr')
const openModalHelp = document.querySelector('.open-modal_help')
const openModalFiltr = document.querySelector('.open-modal_filtr')
const closeModalHelp = document.querySelector('.modalHelp__close')
const closeModalFiltr = document.querySelector('.modalFiltr__close')

openModalHelp.addEventListener('click', e => {
  e.preventDefault()
  
  modal_help.classList.add('modal--open')
  /* body.classList.add('body-lock') */
})

openModalFiltr.addEventListener('click', e => {
  e.preventDefault()
  
  modal_filtr.classList.add('modal--open')
  /* body.classList.add('body-lock') */
})

closeModalHelp.addEventListener('click', e => {
  e.preventDefault()
  
  modal_help.classList.remove('modal--open')
  /* body.classList.remove('body-lock') */
})

closeModalFiltr.addEventListener('click', e => {
  e.preventDefault()
  
  modal_filtr.classList.remove('modal--open')
  /* body.classList.remove('body-lock') */
})




