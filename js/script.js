const btnLogin = document.querySelector('#btn')
const form = document.querySelector('form')

btnLogin.addEventListener('click', event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll('.input-block input')]
  fields.forEach(field => {
    if (field.value == '') {
    form.classList.add('validate-error')
    field.style.border = '0.5px solid red'
  }
    field.addEventListener('keyup', () => {
      if(field.value !== ''){
        field.style.border = '1px solid grey'
      }
    })
  })
  
  const formError = document.querySelector('.validate-error')

  if(formError) {
    formError.addEventListener('animationend', event => {
      if(event.animationName == 'nono'){
        formError.classList.remove('validate-error')
      }
    })
  }else{
    form.classList.add('form-hide')
  }
})

form.addEventListener('animationstart', event => {
  if(event.animationName == 'down'){
    document.querySelector('body').style.overflow = 'hidden'
  }
})

form.addEventListener('animationend', event => {
  if(event.animationName == 'down'){
    document.querySelector('body').style.overflow = 'none'
    form.style.display = 'none'

    setTimeout(() => {
      window.location.reload()
    },1500)
  }
})

/* Animate */

const ulSquares = document.querySelector('ul.squares')

for(let i = 0; i < 17; i++){
    const li = document.createElement('li')

    const random = (min, max) => Math.random() * (max - min) + min
    const size = Math.floor(random(10 , 120))
    const position = random(1, 99) 
    const delay = random(5, 0.1)
    const duration = random(24, 4)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`
    li.style.left = `${position}%`
    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()} , ${Math.random()}, ${Math.random()})`

    ulSquares.appendChild(li)
}