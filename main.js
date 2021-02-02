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