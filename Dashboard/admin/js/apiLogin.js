// const hostLocal = 'http://localhost/allonfasaha/'
const hostLocal = 'https://steamledge.com/allonfasaha/admin/'
let signIn = document.getElementById('getMeIn')
signIn.addEventListener('click', loginAPI)

// ****************** All functions *****************//
function loginAPI() {
  let valueFromInput = document.getElementsByClassName('form-check-auth')
  let username = valueFromInput[0].value
  let password = valueFromInput[1].value
  fetch(`${hostLocal}php/?login&email=${username}&password=${password}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse['status'] === 1) {
        localStorage.setItem('allonfasahaAdminID', jsonResponse['userId']);
        localStorage.setItem('allonfasahaAdminType', jsonResponse['type']);
        localStorage.setItem('allonfasahaAdminName', jsonResponse['userName']);
        localStorage.setItem('allonfasahaAdminUser', jsonResponse['fullName']);
        localStorage.setItem('AFuserInfo', JSON.stringify(jsonResponse));
        signIn.style.background = "green";
        signIn.style.border = "green";
        setTimeout(() => {  signIn.innerHTML = jsonResponse['message'] }, 2000);
        setTimeout(() => {  window.location.replace('html/index.html') }, 4000);
        
      }
    })
}
