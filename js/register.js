const localHost = 'http://localhost/allon-fasaha'

const loginAccountBtn = document.getElementById("loginAccount");
if (loginAccountBtn) {
  loginAccountBtn.addEventListener("click", function (e) {

    e.preventDefault();

    $(".loading-box").html('<img src="../images/spinner.gif" width="50" alt="">');

    let user = document.querySelector("#email").value;
    let pin = document.querySelector("#pin").value;

    async function loginAccount() {
      const response = await fetch(`${localHost}/php/data.php?login=&username=${user}&password=${pin}`, {
        method: "GET",
      });

      const credentials = await response.json();
      console.log(credentials);

      if (credentials.status === 1) {
        $(".signinForm").html(`
          <div class="d-flex justify-content-center" style="flex-direction: column;">
              <img src="../images/spinner.gif" width="20" alt="">
            <p class="text-success text-center">${credentials.message}</p>
          </div>
          
          `);
        window.location.href = "";
      } else if (credentials.status === 0) {
        $(".loading-box").html(`
            <p class="text-danger">Invalid User Account</p>
          `);
      }
    }
    loginAccount();
  });

}






const createAccountBtn = document.querySelector('#register');
if (createAccountBtn) {
  createAccountBtn.addEventListener('click', function (e) {
    e.preventDefault();

    $(".loading-box").html('<img src="../images/spinner.gif" width="50" alt="">');

    let fname = document.querySelector('#fname').value
    let lname = document.querySelector('#lname').value
    let email = document.querySelector('#email').value


    async function createAccount() {
      const response = await fetch(`${localHost}/php/data.php?creatUser=&fname=${fname}&lname=${lname}&email=${email}`, {
        method: 'GET',
      })

      const credentials = await response.json()
      console.log(credentials)
      if (fname == '' || lname == '' || email == '') {
        $(".loading-box").html(`
            <p class="text-danger">Please fill all the blanks</p>
        `)
      } else if (credentials.status === 1) {
        $(".loading-box").html(`
            <p class="text-success">Registration Successfull</p>
        `)

        $('#myModal').modal('hide')
        $('#myModal2').modal('show')
      }

    }
    createAccount();

  });
}







