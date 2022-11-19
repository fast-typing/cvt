let authlog = document.querySelector("#authlog");
let modal = document.querySelector(".modal");
let reg = document.querySelector(".reg");
let loginBttn = document.querySelector(".login");
let username = document.querySelector("#username");    
username.value = localStorage.getItem('username');
    loginBttn.textContent = localStorage.getItem('textContent');
    loginBttn.style.color = localStorage.getItem('color');
    loginBttn.style.background = localStorage.getItem('bg');
    username.style.display = localStorage.getItem('display');
function logout() {
   document.querySelector('body').style.overflow = 'hidden' 
  modal.classList.remove("none");
  if (loginBttn.textContent == "Выйти") {
    modal.classList.add("none");
    // localStorage.setItem('username', username.value)
    localStorage.setItem('textContent', "Войти")
    localStorage.setItem('color', "white")
    localStorage.setItem('bg', "red")
    localStorage.setItem('display', "none")
    username.value = localStorage.getItem('username');
    loginBttn.textContent = localStorage.getItem('textContent');
    loginBttn.style.color = localStorage.getItem('color');
    loginBttn.style.background = localStorage.getItem('bg');
    username.style.display = localStorage.getItem('display');
    authlog.value = ''
  }
}
username.addEventListener('input', ()=>{
  localStorage.setItem('username', username.value)
  username.value = localStorage.getItem('username');
})
function registr() {
  if (authlog.value.length > 0){
    document.querySelector('body').style.overflowY = 'scroll' 
    modal.classList.add("none");
    localStorage.setItem('username', authlog.value)
    console.log(localStorage.getItem('username'))
    localStorage.setItem('textContent', "Выйти")
    localStorage.setItem('color', "red")
    localStorage.setItem('bg', "white")
    localStorage.setItem('display', "block")
    username.value = localStorage.getItem('username');
    loginBttn.textContent = localStorage.getItem('textContent');
    loginBttn.style.color = localStorage.getItem('color');
    loginBttn.style.background = localStorage.getItem('bg');
    username.style.display = localStorage.getItem('display');
    
  }
}