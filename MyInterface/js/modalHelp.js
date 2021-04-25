const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const openModalButton = document.querySelector('.open-modal')
const closeModalButton = document.querySelector('.modal__close')

openModalButton.addEventListener('click', e => {
    e.preventDefault()
    
    modal.classList.add('modal--open')
    body.classList.add('body-lock')
  })
  
  closeModalButton.addEventListener('click', e => {
    e.preventDefault()
    
    modal.classList.remove('modal--open')
    body.classList.remove('body-lock')
  })