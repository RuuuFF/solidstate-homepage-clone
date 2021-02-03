const trigger = document.getElementById('primary-section')
const nav = document.getElementById('nav')

window.addEventListener('scroll', checkTrigger)

function checkTrigger() {
  const navBottom = nav.getBoundingClientRect().bottom
  const triggerTop = trigger.getBoundingClientRect().top
  
  if (navBottom > triggerTop) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

const modalList = document.querySelectorAll('.modal-overlay ul li a')

modalList.forEach(el => {
  el.addEventListener('click', event => {
    Modal.toggle(event)
  })
})

const Modal = {
  toggle(event) {
    event.preventDefault()
    const modal = document.querySelector('.modal-overlay')
    
    modal.classList.toggle('toggle-modal')
  }
}