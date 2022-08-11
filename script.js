const CHARS = '0123456789abcdefghijklmnopqrtsuvwxyz!@#$%^&*()_+=-{}[];:/<>?ABCDEFGHIJKLMNOPQRTSUVWXYZ'
const PWDLENGTH = 16
const btn = document.querySelector('.btn')
const inputEl = document.getElementById('input')
const copyIcon = document.querySelector('.fa-copy')
const alertEl = document.querySelector('.alert-container')

btn.addEventListener('click', () => {
    createPassword()
})

copyIcon.addEventListener('click', () => {
    copyPassword()
    if (inputEl.value){
        alertEl.classList.remove('active')
        setTimeout(() => {
            alertEl.classList.add('active')
        }, 2000)
    }
    
})

function createPassword(){
    let password = ''
    for (let i = 0; i < PWDLENGTH; i++) {
        console.log(i)
        randomNum = Math.floor(Math.random()*CHARS.length)
        password += CHARS.substring(randomNum, randomNum+1)
    }
    inputEl.value = password
    alertEl.innerText = password + 'copied!'
}

function copyPassword(){
    inputEl.select()
    inputEl.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(inputEl.value)
}