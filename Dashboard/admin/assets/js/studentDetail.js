
let queryString = location.search.substring(1);
let linkFetch = queryString.split('?');
// console.log(linkFetch[0])

window.addEventListener('load', getSpecificStudent, false);


function getSpecificStudent() {
  fetch(`${hostLocal}php/?specificStudent=&id=${linkFetch[0]}`)
    .then(response => response.json())
    .then(jsonResponse => {
      // console.log(jsonResponse[2]);
      $('#stp').html(`<img src="${jsonResponse[2]['img']}"  class="rounded-circle" width="90">`);
      document.getElementById('student-name').innerHTML = jsonResponse[0]['fullname'];
      document.getElementById('student-location').innerHTML = jsonResponse[0]['lga'];
      document.getElementById('student-location').innerHTML += ', ' + jsonResponse[0]['state'];
      document.getElementById('student-location').innerHTML += '<br>' + jsonResponse[0]['nationality'];
      document.getElementById('total-score').innerHTML = jsonResponse[0]['totalScore'];
      document.getElementById('total-quiz').innerHTML = jsonResponse[0]['totalQuizPoint'];
      // console.log(jsonResponse[1])
      document.getElementById('parent1').innerHTML = jsonResponse[1]['fullname'];
      document.getElementById('parent2').innerHTML = jsonResponse[1]['occupation'];
      document.getElementById('parent3').innerHTML = jsonResponse[1]['relationship'];
      document.getElementById('parent4').innerHTML = jsonResponse[1]['phone'];
      document.getElementById('parent5').innerHTML = jsonResponse[1]['address'];
      document.getElementById('parent6').innerHTML = jsonResponse[1]['guardian_name'];
      // document.getElementById('parent7').innerHTML = jsonResponse[1]['guardain_occupation'];
      document.getElementById('parent8').innerHTML = jsonResponse[1]['guardain_relationship'];
      document.getElementById('parent9').innerHTML = jsonResponse[1]['guardian_phone'];
      document.getElementById('parent10').innerHTML = jsonResponse[1]['guardian_address'];

      const studentInfo = document.getElementsByClassName('student-info');
      const parentInfo = document.getElementsByClassName('parent-info');

      // console.log(studentInfo);
      const listOfStudentInfo = Array('fullname', 'nationality', 'state', 'lga', 'age', 'center_id');
      let first = ""
      let country = ""
      let age = ""
      let state = ""
      let lga = ""
      for (const key in listOfStudentInfo) {
        studentInfo[key].innerHTML = jsonResponse[0][listOfStudentInfo[key]];
        
        first = studentInfo[0].innerHTML.split(" ");
        country = studentInfo[1].innerHTML;
        age = studentInfo[4].innerHTML;
        state = studentInfo[2].innerHTML;
        lga = studentInfo[3].innerHTML;
        // console.log(first[1]);
      }
      // console.log(studentInfo[1]);
      
      let cont = document.getElementById("cont");
      cont.innerHTML +=`
      <div class="modal-content" >
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel3">Edit Student</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="studeAddForm">
      <div>
      <div class="d-flex justify-content-center">
        <div id="snapControl" class="addStudentModal">
          
          <div class="captureBg" id="snapBtn" data-bs-toggle="modal" data-bs-whatever="addStudentModal" data-bs-target="#snapModal">
            <i class="bx bxs-camera"></i>
          </div>
        </div>
      
      </div>
      <h5 class="text-center mt-2">Capture Image</h5>
      </div>
      <h5 class="text-primary">CENTER</h5>
      
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Country</label>
          <select name="" id="" class="form-select">
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">State</label>
          <select name="" id="" class="form-select statesSelect">
            <option value="Kano">Kano</option>
          </select>
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">LGA</label>
          <select name="" id="" class="form-select lgaSelect">
            <option value="Nassarawa">Nassarawa</option>
          </select>
        </div>
      </div>
      
      
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Assign Center</label>
          <select name="" id="send-worth130" class="form-select form-value-student">
            <option value="Kano Center 1">Kano Center 1</option>
            <option value="Kano Center 1">Kano Center 2</option>
          </select>
        </div>
      </div>
      <h5 class="text-primary">STUDENT</h5>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">First Name</label>
          <input type="text" id="" class="form-control form-value-student" placeholder="${first[0]}" />
        </div>
        <div class="col mb-0">
          <label for="dobLarge" class="form-label">Last Name</label>
          <input type="text" id="dobLarge" class="form-control form-value-student" placeholder="${first[1]}" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Nationality</label>
          <select name="" id="" class="form-select form-value-student">
          <option value="" selected>${country}</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Niger">Niger</option>
          </select>
        </div>
        <div class="col mb-0">
          <label for="dobLarge" class="form-label">Age</label>
          <input type="text" class="form-control form-value-student" name="" placeholder="${age}">
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">State Of Origin</label>
          <select name="" id="" class="form-select form-value-student statesSelect">
          <option value="" selected>${state}</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Borno">Borno</option>
          </select>
        </div>
        <div class="col mb-0">
          <label for="dobLarge" class="form-label">L.G.A</label>
          <select name="" id="" class="form-select form-value-student lgaSelect">
          <option value="" selected>${lga}</option>
            <option value="Nassarawa">Nassarawa</option>
            <option value="Gusau">Gusau</option>
            <option value="Mariri">Mariri</option>
          </select>
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Education Background</label>
          <input type="text" id="" class="form-control form-value-student" placeholder="Primary School Dropout" />
        </div>
      </div>
      <h5 class="text-primary">PARENT/GUARDIAN</h5>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Name</label>
          <input type="text" id="" class="form-control form-value-parent" placeholder="${jsonResponse[1]['fullname']}" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Relationship</label>
          <input type='text' class='form-control form-value-parent' placeholder='${jsonResponse[1]['relationship']}'>
        </div>
      </div>
     
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">State Of Origin</label>
          <select name="" id="" class="form-select form-value-parent statesSelect">
            <option value="Kano">Kano</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Katsina">Katsina</option>
          </select>
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Occupation</label>
          <input type="text" id="" class="form-control form-value-parent" placeholder="${jsonResponse[1]['occupation']}" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Address</label>
          <input type="text" id="" class="form-control form-value-parent" placeholder="${jsonResponse[1]['address']}" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Phone Number</label>
          <input type="number" id="" class="form-control form-value-parent" placeholder="${ jsonResponse[1]['phone']}" />
        </div>
      </div>

      <h5 class="text-primary">GUARDIAN IN CURRENT LOCATION</h5>
      <div class="form-check" >
        <input name="default-radio-1" class="form-check-input" type="checkbox" value="" id="sameaGur" />
        <label class="form-check-label" for="sameaGur" id="form-auto-fill"> Same as Guardian </label>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Name</label>
          <input type="text" id="" class="form-control form-value-guard" placeholder="${jsonResponse[1]['guardian_name']}" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Relationship</label>
          <input type='text' class='form-control form-value-guard' placeholder='${jsonResponse[1]['guardain_relationship']}'>
        </div>
      </div>
    
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Address</label>
          <input type="text" id="" class="form-control form-value-guard" placeholder="${jsonResponse[1]['guardian_address']}" />
        </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Phone Number</label>
        <input type='number' class='form-control form-value-guard' placeholder="${jsonResponse[1]['guardian_phone']}">
      </div>
    </div>
      
      
      
      
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary" id="updateStu">Update Student</button>
      </div>
    </div>
  </div>`


  stopCamera.forEach(stoCam => {
    stoCam.addEventListener('click', function() {
        console.log('hello')
        const video = document.querySelector('video');
        const mediaStream = video.srcObject;
        const tracks = mediaStream.getTracks();
        // tracks[0].stop();
        tracks.forEach(track => track.stop())
    })
})

let snapBtns = document.querySelectorAll('#snapBtn')
snapBtns.forEach(snapBtn => {
    snapBtn.addEventListener('click', () => {
        Webcam.set({
            width: 190,
            height: 190,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
    
        Webcam.attach('#live_camera');      
    })
})
function capture_web_snapshot(e) {
    let eo = e.dataset.number
    console.log(eo)
  Webcam.snap(function (site_url) {
    $('#image-tag').val(site_url);
    $('#preview').html('<img src="' + site_url + '"/>');

    $(`.${eo}`).html(`
    <div id="snapBtn" data-bs-toggle="modal" data-bs-target="#snapModal">
      <img src="${site_url}" class="rounded-circle cursor-pointer" alt="">
    </div>
    `);

  let upStudent = document.getElementById('updateStu');
// console.log(upStudent)
upStudent.addEventListener('click', updateStudent);
function updateStudent() {
  let valueFetchContainer = document.getElementsByClassName('form-value-student');
  //   console.log(valueFetchContainer);
  let arrObjectToSend = Array('center', 'fname', 'lname', 'country', 'age', 'state', 'lga', 'edu_background');
  let getStringPacked = '';
  for (const key in valueFetchContainer) {
    if (valueFetchContainer[key].nodeName === 'INPUT') {
      valueFetchContainer[key].value;
      //   console.log(valueFetchContainer[key].value)
      getStringPacked += `${arrObjectToSend[key]}=${valueFetchContainer[key].value}&`;
    }
    if (valueFetchContainer[key].nodeName === 'SELECT') {
      let select = valueFetchContainer[key];
      let valueOption = select.options[select.selectedIndex].value;
      // console.log(valueOption);
      getStringPacked += `${arrObjectToSend[key]}=${valueOption}&`;
    }
  }
  const editedText = getStringPacked.slice(0, -1);
    // console.log(editedText);
  fetch(`${hostLocal}php/?updateSProfile=&id=${linkFetch[0]}&role=1&${editedText}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse['status'] === 1) {
        let valueFetchContainerParent = document.getElementsByClassName('form-value-parent');
        let valueFetchContainerGuardian = document.getElementsByClassName('form-value-guard');

        let arrObjectToSendParent = Array('fullname', 'relationship', 'state', 'occupation', 'address', 'phone');
        let arrObjectToSendGuardian = Array('fullname_g', 'relationship_g', 'address_g','phone_g');

        let getStringPackedParent = '';
        for (const key in valueFetchContainerParent) {
          if (valueFetchContainerParent[key].nodeName === 'INPUT') {
            valueFetchContainerParent[key].value;
            //   console.log(valueFetchContainerParent[key].value)
            getStringPackedParent += `${arrObjectToSendParent[key]}=${valueFetchContainerParent[key].value}&`;
          }
          if (valueFetchContainerParent[key].nodeName === 'SELECT') {
            let selectParent = valueFetchContainerParent[key];
            let valueOptionParent = selectParent.options[selectParent.selectedIndex].value;
            // console.log(valueOptionParent);
            getStringPackedParent += `${arrObjectToSendParent[key]}=${valueOptionParent}&`;
          }
        }

        for (const key in valueFetchContainerGuardian) {
          if (valueFetchContainerGuardian[key].nodeName === 'INPUT') {
            valueFetchContainerGuardian[key].value;
            //   console.log(valueFetchContainerGuardian[key].value)
            getStringPackedParent += `${arrObjectToSendGuardian[key]}=${valueFetchContainerGuardian[key].value}&`;
          } else if (valueFetchContainerGuardian[key].nodeName === 'SELECT') {
            let selectGuardian = valueFetchContainerGuardian[key];
            let valueOptionGuardian = selectGuardian.options[selectGuardian.selectedIndex].value;
            // console.log(valueOptionGuardian);
            getStringPackedParent += `${arrObjectToSendGuardian[key]}=${valueOptionGuardian}&`;
          }
        }

        const editedText1 = getStringPackedParent.slice(0, -1) + '&connector=' + jsonResponse['message'];
        // const editedText1 = getStringPackedParent.slice(0, -1);

        // console.log(editedText1);
        // console.log(valueFetchContainerGuardian);

        fetch(`${hostLocal}php/?updateSProfile=&id=${linkFetch[0]}&role=0&${editedText1}`)
          .then(response => response.json())
          .then(jsonResponse1 => {
            // console.log(jsonResponse1);
            if(jsonResponse1['status'] == 1){
              Swal.fire({
                icon: 'success',
                text: jsonResponse1['message'],
                confirmButtonText: 'close'
              });
                alert(jsonResponse1['message'])
                $.ajax({
                  type: "POST",
                  url: `${hostLocal}/php/index.php`,
                  data: { updateImg: '', st_image: site_url, connector: jsonResponse1['connector']},
                  dataType: "json",
                  
              });
            }
          });
      }
    });
}
});
}


    });

  fetch(`${hostLocal}php/?getStudentMetrics=&id=${linkFetch[0]}`)
    .then(response => response.json())
    .then(jsonResponse => {
      // console.log(jsonResponse);
      for (const key in jsonResponse) {
        if (key == 1) {
          document.getElementById('nav-section').innerHTML += ` <li class="nav-item">
              <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                data-bs-target="#module${key}">
                Module ${key}
              </button>
            </li>`;
          document.getElementById(
            'nav-body'
          ).innerHTML += `<div class="tab-pane fade show active" id="module${key}" role="tabpanel">${key}</div>`;
          for (const key1 in jsonResponse[key]) {
            if (key1 == 1) {
              document.getElementById('module' + key).innerHTML += `
              <div class="accordion mt-3" id="accordionExample${key}${key1}">
                 <div class="card accordion-item active">
                   <h2 class="accordion-header" id="headingOne${key}${key1}">
                     <button type="button" class="accordion-button" data-bs-toggle="collapse"
                       data-bs-target="#levelAcc1${key}${key1}" aria-expanded="true" aria-controls="levelAcc1${key}${key1}">
                       Level ${key1}
                     </button>
                   </h2>
                   <div id="levelAcc1${key}${key1}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample${key}${key1}">
                   <div class="accordion-body">
                     <div class="row">
                       <div class="col-md-12" id="in-here${key}${key1}">
                         
                      </div>
                    </div>
                  </div>  
 
                   `;
            } else {
              document.getElementById('module' + key).innerHTML += `
              <div class="accordion mt-3" id="accordionExample${key}${key1}">
                 <div class="card accordion-item">
                   <h2 class="accordion-header" id="${key}${key1}${key}${key1}">
                     <button type="button" class="accordion-button" data-bs-toggle="collapse"
                       data-bs-target="#levelAcc1${key}${key1}" aria-expanded="true" aria-controls="levelAcc1${key}${key1}">
                       Level ${key1}
                     </button>
                   </h2>
                   <div id="levelAcc1${key}${key1}" class="accordion-collapse collapse" data-bs-parent="#accordionExample${key}${key1}">
                   <div class="accordion-body">
                     <div class="row">
                       <div class="col-md-12" id="in-here${key}${key1}">

                        </div>
                    </div>
                  </div>  
 
                   `;
            }
            document.getElementById('module' + key).innerHTML += `</div></div> `;
          }
        } else {
          document.getElementById('nav-section').innerHTML += `<li class="nav-item">
              <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                data-bs-target="#module${key}">
                Module ${key}
              </button>
            </li>`;
          document.getElementById(
            'nav-body'
          ).innerHTML += `<div class="tab-pane fade" id="module${key}" role="tabpanel">${key}</div>`;
          for (const key1 in jsonResponse[key]) {
            if (key1 == 1) {
              document.getElementById('module' + key).innerHTML += `
              <div class="accordion mt-3" id="accordionExample${key}${key1}">
                 <div class="card accordion-item active">
                   <h2 class="accordion-header" id="headingOne${key}${key1}">
                     <button type="button" class="accordion-button" data-bs-toggle="collapse"
                       data-bs-target="#levelAcc1${key}${key1}" aria-expanded="true" aria-controls="levelAcc1${key}${key1}">
                       Level ${key1}
                     </button>
                   </h2>
                   <div id="levelAcc1${key}${key1}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample${key}${key1}">
                   <div class="accordion-body">
                     <div class="row">
                       <div class="col-md-12" id="in-here${key}${key1}">
                         
                      </div>
                    </div>
                  </div>  
 
                   `;
            } else {
              document.getElementById('module' + key).innerHTML += `
              <div class="accordion mt-3" id="accordionExample${key}${key1}">
                 <div class="card accordion-item">
                   <h2 class="accordion-header" id="${key}${key1}${key}${key1}">
                     <button type="button" class="accordion-button" data-bs-toggle="collapse"
                       data-bs-target="#levelAcc1${key}${key1}" aria-expanded="true" aria-controls="levelAcc1${key}${key1}">
                       Level ${key1}
                     </button>
                   </h2>
                   <div id="levelAcc1${key}${key1}" class="accordion-collapse collapse" data-bs-parent="#accordionExample${key}${key1}">
                   <div class="accordion-body">
                     <div class="row">
                       <div class="col-md-12" id="in-here${key}${key1}">

                        </div>
                    </div>
                  </div>  
 
                   `;
            }
          }
        }
      }
      for (const keyExtract in jsonResponse) {
        for (const keyExtract1 in jsonResponse[keyExtract]) {
          // console.log(jsonResponse[keyExtract][keyExtract1]);
          let sendInfo;
          for (const keyExtract2 in jsonResponse[keyExtract][keyExtract1]) {
            // console.log(jsonResponse[keyExtract][keyExtract1][keyExtract2]);
            sendInfo = `
            <div>
            <h5 class="text-primary shift-them mt-5">${keyExtract2}</h5>
            <div class="table-responsive">
            <table class="table theTable">
              <thead>
                <th>Topics</th>
                <th>Subtopics</th>
                <th>Assessment</th>
                <th>Assessment <br>Trial</th>
                <th>Quiz <br> Points</th>
              </thead>
              <tbody>
                        `;
            for (let i = 0; i < jsonResponse[keyExtract][keyExtract1][keyExtract2].length; i++) {
              sendInfo += `
                                <tr align="center">
                                  <td>${jsonResponse[keyExtract][keyExtract1][keyExtract2][i].subject_name}</td>
                                  <td>${jsonResponse[keyExtract][keyExtract1][keyExtract2][i].module_name}</td>
                                  <td>${jsonResponse[keyExtract][keyExtract1][keyExtract2][i].assm_unit}</td>
                                  <td>${jsonResponse[keyExtract][keyExtract1][keyExtract2][i].trails}</td>
                                  <td>${jsonResponse[keyExtract][keyExtract1][keyExtract2][i].quiz_unit_point}</td>
                                </tr>
                             `;
            }
            sendInfo += ` </tbody>
            </table>
          </div>
          </div>
          `;
            // console.log(sendInfo);
            document.getElementById('in-here' + keyExtract + keyExtract1).innerHTML += sendInfo;
            // console.log(keyExtract2);
          }
        }
      }
    });
}

window.addEventListener('load', getSpecificStudentFeed, false);

function getSpecificStudentFeed() {
  fetch(`${hostLocal}php/?studentFeedingChart=&id=${linkFetch[0]}`)
    .then(response => response.json())
    .then(jsonResponse => {
      // console.log(jsonResponse[0]);
      const feed = jsonResponse
      // console.log(feed)
      var chartDom = document.getElementById('performanceGraph2');
      var myChart = echarts.init(chartDom);
      var option;
      
      option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          // boundaryGap: [0, 0.01]
        },
        xAxis: {
          type: 'category',
          data: ['Feeding', 'Logins']
        },
        series: [
          {
            type: 'bar',
            data: [{
              value: feed.feeding,
              itemStyle: {
                color: '#96EAB7'
              }
            },
             feed.st_activities],
            // barWidth: '20%',
            itemStyle: {
              barBorderRadius: 5,
              color: '#A6CEE3',
            }
          },
      
      
        ]
      };
      option && myChart.setOption(option);
    });
}


