// **************** Archives **************//
// const hostLocal = 'http://localhost/allonfasaha/'
window.addEventListener('load', getAllCentresOption, false);
window.addEventListener('load', getAllCentres, false);

// let regUser = document.getElementById('addUser');
// regUser.addEventListener('click', addUser);
// // ****************** All functions *****************//
// function addUser() {
//   let valueFetchContainer = document.getElementsByClassName('form-value');
//   //   console.log(valueFetchContainer);
//   let arrObjectToSend = Array('fullname', 'country', 'state', 'lga', 'center', 'role', 'email', 'password');
//   let getStringPacked = '';
//   for (const key in valueFetchContainer) {
//     if (valueFetchContainer[key].nodeName === 'INPUT') {
//       valueFetchContainer[key].value;
//     //   console.log(valueFetchContainer[key].value)
//       getStringPacked += `${arrObjectToSend[key]}=${valueFetchContainer[key].value}&`;
//     }
//     if (valueFetchContainer[key].nodeName === 'SELECT') {
//       let select = valueFetchContainer[key];
//       let valueOption = select.options[select.selectedIndex].value;
//         // console.log(valueOption);
//       getStringPacked += `${arrObjectToSend[key]}=${valueOption}&`;
//     }
//   }
//   const editedText = getStringPacked.slice(0, -1);
//   // console.log(editedText)
//   fetch(`${hostLocal}php/?creatUser&${editedText}`)
//     .then(response => response.json())
//     .then(jsonResponse => {
//       Swal.fire({
//         icon: 'success',
//         text: jsonResponse['message'],
//         confirmButtonText: 'close'
//       });
//     });
// }

function getAllCentresOption() {
  let getCenterAvailable = '';
  fetch(`${hostLocal}php/?getCenters`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (const key in jsonResponse) {
        // console.log(jsonResponse[key]);
        getCenterAvailable += `
                  <option value="${jsonResponse[key]['id']}">${jsonResponse[key]['centre_name']}</option>
          `;
      }
      $('.send-worth').html(getCenterAvailable);
     
    });
}

function getAllCentres() {
  let getTables = ""
  fetch(`${hostLocal}php/?allAdmins`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (const key in jsonResponse) {
        console.log(jsonResponse[key]);
        getTables += `
            <tr>
                <td>${jsonResponse[key]['fullname']}</td>
                <td>${jsonResponse[key]['center']}</td>
                <td>${jsonResponse[key]['role']}</td>
                <td>${jsonResponse[key]['timeIn']}</td>
                <td>
                <a href="userDetails.html?${jsonResponse[key]['id']}" class="btn btn-sm btn-outline-primary">
                    <span class="tf-icons bx bx-bullseye"></span>&nbsp; View
                </a>
                </td>
            </tr>
        `;
      }
      document.getElementById('send-with').innerHTML = getTables
    });
    
}
