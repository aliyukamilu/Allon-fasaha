window.addEventListener('load', getAllStudentSpecificCentre, false);
// const hostLocal = 'http://localhost/allonfasaha/'
function getAllStudentSpecificCentre() {
  let queryString = location.search.substring(1);
  let linkFetch = queryString.split('?');
  let getTables = '';
  fetch(`${hostLocal}php/?getAllStudentSpecificCentreFeeding&id=${linkFetch[0]}`)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
      for (const key in jsonResponse) {
        // console.log(jsonResponse[key]);
        getTables += `
              <tr>
                  <td><input class="form-check-input check-feed mr-3" type="checkbox" value="${jsonResponse[key]['id']}" id="defaultCheck1">&nbsp ${jsonResponse[key]['first_name']} ${jsonResponse[key]['last_name']}</td>
                  <td>${jsonResponse[key]['hash_pin']}</td>
                  <td>${jsonResponse[key]['module_level']}</td>
                  <td>${jsonResponse[key]['timeIn']}</td>
                  <td>${jsonResponse[key]['total_score']}</td>
                  <td>
                  <a href="studentDetails.html?${jsonResponse[key]['id']}" class="btn btn-sm btn-outline-primary">
                      <span class="tf-icons bx bx-bullseye"></span>&nbsp; View
                  </a>
                  </td>
              </tr>
          `;
      }
      document.getElementById('feed-table').innerHTML = getTables;
    });
}

let updateFeed = document.getElementById('update-feeding');
updateFeed.addEventListener('click', updateFeeding);
function updateFeeding() {
  let getCheckedStudent = document.getElementsByClassName('check-feed');
  // console.log(getCheckedStudent.checked)
  let collectFedIds = '';
  for (const key in getCheckedStudent) {
    if (getCheckedStudent[key].checked) {
      collectFedIds += getCheckedStudent[key].value+"~";
    }
  }
  collectFedIds = collectFedIds.slice(0, -1)
  // alert(collectFedIds)
  fetch(`${hostLocal}php/?updateFeedingCenter&info=${collectFedIds}`)
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse);
    getAllStudentSpecificCentre()
    // document.getElementById('feed-table').innerHTML = getTables;
  });
}
