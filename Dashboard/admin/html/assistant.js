
let regCenter = document.getElementById('addCenterAssistant');
regCenter.addEventListener('click', centerAdd);
// table data
window.addEventListener('load', getAllCentres, false);
// table data
// ****************** All functions *****************//
function centerAssistantAdd() {
  let valueFetchContainer = document.getElementsByClassName('form-value');
  //   console.log(valueFetchContainer);
  let arrObjectToSend = Array('center_name', 'center_region', 'center_country', 'center_state', 'center_lga');
  let getStringPacked = '';
  for (const key in valueFetchContainer) {
    if (valueFetchContainer[key].nodeName === 'INPUT') {
      valueFetchContainer[key].value;
      getStringPacked += `${arrObjectToSend[key]}=${valueFetchContainer[key].value}&`;
    }
    if (valueFetchContainer[key].nodeName === 'SELECT') {
      let select = valueFetchContainer[key];
      let valueOption = select.options[select.selectedIndex].value;
      //   console.log(valueOption);
      getStringPacked += `${arrObjectToSend[key]}=${valueOption}&`;
    }
  }
  const editedText = getStringPacked.slice(0, -1);
  fetch(`http://localhost/allonfasahaDashboard/php/?addCenter&${editedText}`)
    .then(response => response.json())
    .then(jsonResponse => {
      Swal.fire({
        icon: 'success',
        text: jsonResponse['message'],
        confirmButtonText: 'close'
      });
    });
}
