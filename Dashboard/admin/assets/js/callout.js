// **************** Archives **************//
// let hostLocal = 'http://localhost/allonfasaha/'
window.addEventListener('load', getTopDashboard, false);

// ****************** All functions *****************//
// const hostLocal = 'http://localhost/allonfasaha/'
function getTopDashboard() {
  let valueIntoContainer = document.getElementsByClassName('set-value');
  fetch(`${hostLocal}php/?dashboardTop`)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(valueIntoContainer);
      let x = 0;
      for (const key in jsonResponse) {
        let xx = x++;
        valueIntoContainer[xx].innerHTML = jsonResponse[key];
      }
    });
}
