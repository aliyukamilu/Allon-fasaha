
let allDetais = localStorage.getItem('AFuserInfo')

let correctDetais = JSON.parse(allDetais)
   $('#details').html(`
   <tr>
                 <th>Name : </th>
                 <td>${correctDetais.fullName}</td>
               </tr>
               <tr>
                 <th>Role : </th>
                 <td>${correctDetais.role}</td>
               </tr>
               <tr>
                 <th>Center : </th>
                 <td>${correctDetais.center}</td>
               </tr>
               <tr>
                 <th>Country : </th>
                 <td>${correctDetais.country}</td>
               </tr>
               <tr>
                 <th>State : </th>
                 <td>${correctDetais.state}</td>
               </tr>
               <tr>
                 <th>L.G.A : </th>
                 <td>${correctDetais.lga}</td>
               </tr>
               <tr>
                 <th>Phone : </th>
                 <td>${correctDetais.phone}</td>
               </tr>
               
   `)


const upadateBtn = document.getElementById("updatePass");
if (upadateBtn) {
  upadateBtn.addEventListener("click", function (e) {

    e.preventDefault();
  
    let user = correctDetais.userId
    let pin = document.querySelector("#pass").value;
    let Cpin = document.querySelector("#Cpin").value;
    if (pin === Cpin) {
    async function loginAccount() {
      const response = await fetch(`${hostLocal}php/?updatePass&id=${user}&pin=${pin}`, {
        method: "GET",
      });

      const credentials = await response.json();
      // console.log(credentials);

      if (credentials.status === 1) {
          Swal.fire({
            icon: 'success',
            text: 'Password Updated Successfully.',
            confirmButtonText: 'close'
          
        })
      
      }
    }
    loginAccount();
  }
  });

}
