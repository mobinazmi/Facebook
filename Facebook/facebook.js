const btn = document.getElementById('new-account')
const main = document.querySelector('main')

let newDate = new Date()
let year = newDate.getFullYear()
let month = newDate.getMonth() + 1 
let d = newDate.getDay()
console.log(month + '/' + d + '/' + year)

const form = document.getElementById('form')
btn.addEventListener('click', function() {
  main.style.zIndex = '0'
  main.style.position = 'fixed'
  const month = document.getElementById('month')

  // const close = document.getElementById('close-btn')
  // close.addEventListener('click', function() {
  //   form.style.display = 'none'
  // })  
})

const signUp = document.getElementById('sign-up-btn')
signUp.addEventListener('click', function(){
  main.style.zIndex = '0'
  const firstName = document.getElementById('first-name')
  const lastName = document.getElementById('last-name')
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  
  if (firstName.value.length == 0) {
    firstName.style.borderColor = 'red'
  }
  if (lastName.value.length == 0) {
    lastName.style.borderColor = 'red'
  }
  if (username.value.length == 0) {
    username.style.borderColor = 'red'
  }
  if (password.value.length == 0) {
    password.style.borderColor = 'red'
  }


  const radioButtons = document.querySelectorAll('input[name="gender"]')
  for (const radioButton of radioButtons) {
    if (!radioButton.checked) {
      radioButton.style.borderColor = 'red'
    }
  }

})




