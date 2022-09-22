// const hostLocal = 'http://localhost/allonfasaha/'
// **************** Archives **************//
// window.addEventListener('load', getAllCentresOption, false);
window.addEventListener('load', getAllStudent, false);

// let regStudent = document.getElementById('addStu');
// regStudent.addEventListener('click', addStudent);

// let getSame = document.getElementById('form-auto-fill');
// getSame.addEventListener('click', getAllSame);

// let viewStudent = document.getElementsByClassName('student-view');
// viewStudent.addEventListener('click', getAllSame);
// ****************** All functions *****************//
// function addStudent() {
//   let valueFetchContainer = document.getElementsByClassName('form-value-student');
//   //   console.log(valueFetchContainer);
//   let arrObjectToSend = Array('center', 'fname', 'lname', 'country', 'age', 'state', 'lga');
//   let getStringPacked = '';
//   for (const key in valueFetchContainer) {
//     if (valueFetchContainer[key].nodeName === 'INPUT') {
//       valueFetchContainer[key].value;
//       //   console.log(valueFetchContainer[key].value)
//       getStringPacked += `${arrObjectToSend[key]}=${valueFetchContainer[key].value}&`;
//     }
//     if (valueFetchContainer[key].nodeName === 'SELECT') {
//       let select = valueFetchContainer[key];
//       let valueOption = select.options[select.selectedIndex].value;
//       // console.log(valueOption);
//       getStringPacked += `${arrObjectToSend[key]}=${valueOption}&`;
//     }
//   }
//   const editedText = getStringPacked.slice(0, -1);
//   //   console.log(editedText);
//   fetch(`${hostLocal}php/?createStudent=&role=1&${editedText}`)
//     .then(response => response.json())
//     .then(jsonResponse => {
//       if (jsonResponse['status'] === 1) {
//         let valueFetchContainerParent = document.getElementsByClassName('form-value-parent');
//         let valueFetchContainerGuardian = document.getElementsByClassName('form-value-guard');

//         let arrObjectToSendParent = Array('fullname', 'relationship', 'state', 'occupation', 'education', 'address');
//         let arrObjectToSendGuardian = Array('fullname_g', 'relationship_g', 'address_g');

//         let getStringPackedParent = '';
//         for (const key in valueFetchContainerParent) {
//           if (valueFetchContainerParent[key].nodeName === 'INPUT') {
//             valueFetchContainerParent[key].value;
//             //   console.log(valueFetchContainerParent[key].value)
//             getStringPackedParent += `${arrObjectToSendParent[key]}=${valueFetchContainerParent[key].value}&`;
//           }
//           if (valueFetchContainerParent[key].nodeName === 'SELECT') {
//             let selectParent = valueFetchContainerParent[key];
//             let valueOptionParent = selectParent.options[selectParent.selectedIndex].value;
//             // console.log(valueOptionParent);
//             getStringPackedParent += `${arrObjectToSendParent[key]}=${valueOptionParent}&`;
//           }
//         }

//         for (const key in valueFetchContainerGuardian) {
//           if (valueFetchContainerGuardian[key].nodeName === 'INPUT') {
//             valueFetchContainerGuardian[key].value;
//             //   console.log(valueFetchContainerGuardian[key].value)
//             getStringPackedParent += `${arrObjectToSendGuardian[key]}=${valueFetchContainerGuardian[key].value}&`;
//           } else if (valueFetchContainerGuardian[key].nodeName === 'SELECT') {
//             let selectGuardian = valueFetchContainerGuardian[key];
//             let valueOptionGuardian = selectGuardian.options[selectGuardian.selectedIndex].value;
//             // console.log(valueOptionGuardian);
//             getStringPackedParent += `${arrObjectToSendGuardian[key]}=${valueOptionGuardian}&`;
//           }
//         }

//         const editedText1 = getStringPackedParent.slice(0, -1) + '&connector=' + jsonResponse['message'];
//         // const editedText1 = getStringPackedParent.slice(0, -1);

//         // console.log(editedText1);
//         // console.log(valueFetchContainerGuardian);

//         fetch(`${hostLocal}php/?createStudent=&role=0&${editedText1}`)
//           .then(response => response.json())
//           .then(jsonResponse1 => {
//             console.log(jsonResponse1)
//           });
//       }
//     });
// }

// function getAllCentresOption() {
//   let getCenterAvailable = '';
//   fetch(`${hostLocal}php/?getCenters`)
//     .then(response => response.json())
//     .then(jsonResponse => {
//       for (const key in jsonResponse) {
//         // console.log(jsonResponse[key]);
//         getCenterAvailable += `
//                   <option value="${jsonResponse[key]['id']}">${jsonResponse[key]['centre_name']}</option>
//           `;
//       }
//       document.getElementById('send-worth').innerHTML = getCenterAvailable;
//     });
// }

// function getAllSame(){
//   // alert("hi")
//   let valueFetchContainerParent = document.getElementsByClassName('form-value-parent');
//   let valueFetchContainerGuardian = document.getElementsByClassName('form-value-guard');
//   valueFetchContainerGuardian[0].value = valueFetchContainerParent[0].value
//   valueFetchContainerGuardian[2].value = valueFetchContainerParent[5].value
// }


function getAllStudent() {
  let getTables = ""
  fetch(`${hostLocal}php/?allStudent`)
    .then(response => response.json())
    .then(jsonResponse => {
      // console.log(jsonResponse);

      for (const key in jsonResponse) {
        // console.log(jsonResponse[key]);
        getTables += `
            <tr>
                <td>${jsonResponse[key]['first_name']} ${jsonResponse[key]['last_name']}</td>
                <td>${jsonResponse[key]['st_username']}</td>
                <td>${jsonResponse[key]['age']}</td>
                <td>${jsonResponse[key]['logins']}</td>
                <td>${jsonResponse[key]['time']}</td>
                <td>${jsonResponse[key]['total_score']}</td>
                <td>
                <a href="studentDetails.html?${jsonResponse[key]['id']}" class="btn btn-sm btn-outline-primary">
                    <span class="tf-icons bx bx-bullseye"></span>&nbsp; View
                </a>
                </td>
            </tr>
        `;
      }
      document.getElementById('send-with').innerHTML = getTables
    });

}

