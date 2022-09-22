// **************** Archives **************//
// const hostLocal = 'http://localhost/allonfasaha/'
// let regCenter = document.getElementById('addCenter');
// regCenter.addEventListener('click', centerAdd);
// table data
window.addEventListener('load', getAllCentres, false);
// table data
// ****************** All functions *****************//
// function centerAdd() {
//   let valueFetchContainer = document.getElementsByClassName('form-value-center');
//   //   console.log(valueFetchContainer);
//   let arrObjectToSend = Array('center_name', 'center_type', 'center_region', 'center_country', 'center_state', 'center_lga', 'latitude', 'longitude');
//   let getStringPacked = '';
//   for (const key in valueFetchContainer) {
//     if (valueFetchContainer[key].nodeName === 'INPUT') {
//       valueFetchContainer[key].value;
//       getStringPacked += `${arrObjectToSend[key]}=${valueFetchContainer[key].value}&`;
//     }
//     if (valueFetchContainer[key].nodeName === 'SELECT') {
//       let select = valueFetchContainer[key];
//       let valueOption = select.options[select.selectedIndex].value;
//       //   console.log(valueOption);
//       getStringPacked += `${arrObjectToSend[key]}=${valueOption}&`;
//     }
//   }
//   const editedText = getStringPacked.slice(0, -1);
//   fetch(`${hostLocal}php/?addCenter&${editedText}`)
//     .then(response => response.json())
//     .then(jsonResponse => {
//       Swal.fire({
//         icon: 'success',
//         text: jsonResponse['message'],
//         confirmButtonText: 'close'
//       });
//     });
// }

function getAllCentres() {
  let getTables = ""
  fetch(`${hostLocal}php/?getCenters`)
    .then(response => response.json())
    .then(jsonResponse => {
      for (const key in jsonResponse) {
        // console.log(jsonResponse[key]);
        getTables += `
            <tr>
                <td>${jsonResponse[key]['centre_name']}</td>
                <td>${jsonResponse[key]['centre_country']}</td>
                <td>${jsonResponse[key]['centre_state']}</td>
                <td>${jsonResponse[key]['centre_lga']}</td>
                <td>${jsonResponse[key]['total_student']}</td>
                <td>${jsonResponse[key]['no_of_student']}</td>
                <td></td>
                <td>
                <a href="centerDetails.html?${jsonResponse[key]['id']}" class="btn btn-sm btn-outline-primary">
                    <span class="tf-icons bx bx-bullseye"></span>&nbsp; View
                </a>
                </td>
            </tr>
        `;
      }
      document.getElementById('send-with').innerHTML = getTables
    });
    
}
