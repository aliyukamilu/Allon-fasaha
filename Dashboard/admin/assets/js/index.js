// const hostLocal = 'https://steamledge.com/allonfasaha/admin/'
const hostLocal = 'http://localhost/Allon-fasaha/dashboard/admin/'
window.addEventListener('load', fetchCenter, false);

let adminName = localStorage.getItem('allonfasahaAdminUser');
$('.sideBar').html(`
<div class="app-brand demo"> 
<a href="#" class="app-brand-link">
  <img src="../assets/img/logo.png" width="140" height="60" />
</a>

<a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
  <i class="bx bx-chevron-left bx-sm align-middle"></i>
</a>
</div>

<div class="menu-inner-shadow"></div>

<ul class="menu-inner py-1 mt-5">
<!-- Dashboard -->
<li class="menu-item">
  <a href="index.html" class="menu-link">
    <i class="menu-icon tf-icons bx bx-home-circle"></i>
    <div data-i18n="Analytics">Dashboard</div>
  </a>
</li>

<li class="menu-item">
  <a href="center.html" class="menu-link">
    <i class="menu-icon tf-icons bx bxs-cog"></i>
    <div data-i18n="Analytics">Center</div>
  </a>
</li>

<li class="menu-item">
  <a href="students.html" class="menu-link">
    <i class="menu-icon tf-icons bx bxs-graduation"></i>
    <div data-i18n="Analytics">Students</div>
  </a>
</li>

<li class="menu-item">
  <a href="users.html" class="menu-link">
    <i class="menu-icon tf-icons bx bxs-user-account"></i>
    <div data-i18n="Analytics">Users</div>
  </a>
</li>
</ul>
`);

$('.theNavBar').html(`
<div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
<a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
  <i class="bx bx-menu bx-sm"></i>
</a>
</div>

<div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
<!-- Search -->
<div class="navbar-nav align-items-center">
  <div class="nav-item d-flex align-items-center">
    <i class="bx bx-search fs-4 lh-0"></i>
    <input
      type="text"
      class="form-control border-0 shadow-none"
      placeholder="Search..."
      aria-label="Search..."
    />
  </div>
</div>
<!-- /Search -->

<ul class="navbar-nav flex-row align-items-center ms-auto">
  <!-- User -->
  <li class="nav-item navbar-dropdown dropdown-user dropdown">
    <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
    <button type="" class="btn">
      <i class="bx bx-plus"></i> Add
    </button>
    </a>
    <ul class="dropdown-menu" style="">
      <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#addStudentModal" href="javascript:void(0);">Add Student</a></li>
      <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#addCenterModal" href="javascript:void(0);">Add Center</a></li>
      <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#assistantModal" href="javascript:void(0);">Add Center Assistant</a></li>
      <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#addUserModal" href="javascript:void(0);">Add User</a></li>
    </ul>
  </li>
  <li class="nav-item navbar-dropdown dropdown-user dropdown">
    <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
      <div class="avatar avatar-online">
        <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
      </div>
    </a>
    <ul class="dropdown-menu dropdown-menu-end">
      <li>
        <a class="dropdown-item" href="profile.html">
          <div class="d-flex">
            <div class="flex-shrink-0 me-3">
              <div class="avatar avatar-online">
                <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
              </div>
            </div>
            <div class="flex-grow-1">
              <span class="fw-semibold d-block">${adminName}</span>
              <small class="text-muted">Admin</small>
            </div>
          </div>
        </a>
      </li>
      <li>
        <div class="dropdown-divider"></div>
      </li>
      <li>
        <a class="dropdown-item" href="profile.html">
          <i class="bx bx-user me-2"></i>
          <span class="align-middle">My Profile</span>
        </a>
      </li>
      <li>
        <div class="dropdown-divider"></div>
      </li>
      <li>
        <a class="dropdown-item" href="../index.html">
          <i class="bx bx-power-off me-2"></i>
          <span class="align-middle">Log Out</span>
        </a>
      </li>
    </ul>
  </li>
  <!--/ User -->
</ul>
</div>
`);

let theUrl = window.location.href;
let theUrlArr = theUrl.split('/');
let theUrlLast = theUrlArr[theUrlArr.length - 1];
$(`a[href='${theUrlLast}']`).parent().addClass('active');
// document.querySelector(`a[href="${theUrlLast}"]`).parentElement.classList.add('active');

// Chart


// 'fullname', 'country', 'state', 'lga', 'center', 'role', 'email', 'password'

$('body').append(`

<!-- **************************************** Add Assistant Admin Modal **************************************** -->
  <!-- **************************************** Add Assistant Admin Modal **************************************** -->

  
  <div class="modal fade" id="assistantModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel3">Add Center Assistant</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Name</label>
          <input type="email" id="" class="form-control form-value1" placeholder="Full Name" />
        </div>
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Country</label>
          <select class='form-select form-value1'>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
          </select>
        </div>
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">State</label>
          <select class='form-select form-value1 statesSelect'>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
          </select>
        </div>
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">L.G.A</label>
          <select class='form-select form-value1 lgaSelect'>
            <option value="Nassarawa">Nassarawa</option>
            <option value="Dabo">Dabo</option>
          </select>
        </div>
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Address</label>
          <input type="email" id="" class="form-control form-value1" placeholder="" />
        </div>
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Email</label>
          <input type="email" id="" class="form-control form-value1" placeholder="" />
        </div>
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Phone Number</label>
          <input type="number" id="" class="form-control form-value1" placeholder="" />
        </div>
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Center</label>
          <select class='form-select form-value1' id="send-worth13">
            <option>Kano Center 1s</option>
            <option>Kano Center 2</option>
            <option>Kano Center 3</option>
            <option>Kano Center 4</option>
          </select>
        </div>

        <div class="d-flex justify-content-center mt-4">
          <div id="snapControl" class="assistantModal">
            <div class="captureBg" id="snapBtn" data-bs-toggle="modal" data-bs-whatever="assistantModal" data-bs-target="#snapModal">
              <i class="bx bxs-camera"></i>
            </div>
          </div>
        </div>
        <h5 class="text-center mt-2">Capture Image</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary" id="addUserAssist">Add Center Assisstant</button>
      </div>
    </div>
  </div>
</div>
`)


$('body').append(`
    
  <!-- camera -->
  <div class="modal fade" id="snapModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Take a Snap</h5>
          <button type="button" class="btn-close stopCamera" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <div class="row pakainfo">
              <div class="col-md-6 pakainfo">
                <div id="live_camera"></div>
                <hr />
                <input type=button class="btn btn-primary" id="takeSnap" data-number='' value="Take Snapshot"
                  onClick="capture_web_snapshot(this)">
                <input type="hidden" name="image" class="image-tag">
              </div>
              <div class="col-md-6">
                <div id="preview">Your captured image will appear here...</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary stopCamera" id="saveChangesBtn">Save changes</button>
        </div>
      </div>
    </div>
  </div>
`)

$('body').append(`
<input type="hidden" id="image-tag">

<!-- **************************************** Add User Modal **************************************** -->
  <!-- **************************************** Add User Modal **************************************** -->

<div class="modal fade" id="addUserModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel3">Add New User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="userForm">
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Name</label>
        <input type="text" id="" class="form-control form-value" placeholder="Aliyu Kamilu" />
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Email</label>
        <input type="email" id="" class="form-control form-value" placeholder="Email Address" />
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Phone Number</label>
        <input type="tel" id="" class="form-control form-value" placeholder="" />
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Country</label>
        <select name="" class="form-select form-value" id="">
          <option value="Nigeria">Nigeria</option>
          <option value="Niger">Niger</option>
        </select>
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">State</label>
        <select name="" class="form-select form-value statesSelect" id="">
          <option value="Kano">Kano</option>
          <option value="Kaduna">Kaduna</option>
        </select>
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">L.G.A</label>
        <select name="" class="form-select form-value lgaSelect" id="">
          <option value="Nassarawa">Nassarawa</option>
          <option value="">Albasu</option>
        </select>
      </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Role</label>
          <select name="" class="form-select form-value" id="roleAdmin">
            <option value="SuperAdmin">Super Admin</option>
            <option value="Admin">Admin</option>
            <option value="CenterAdmin">Center Admin</option>
          </select>
        </div>
      </div>
      
     

      <div id='selectionRole'>
      </div>

      <div class="row g-2 mb-3">
          <div class="col mb-0">
            <label for="emailLarge" class="form-label">Password</label>
            <input type="password" id="" class="form-control form-value" placeholder="Set User Password" />
          </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary" id="addUser">Register</button>
      </div>
    </div>
  </div>
</div> 



<!-- **************************************** Add center Modal **************************************** -->
  <!-- **************************************** Add center Modal **************************************** -->


<div class="modal fade" id="addCenterModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel3">Add New Center</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="addCenterForm">
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Center Name</label>
        <input type="text" id="" class="form-control form-value-center" placeholder="" />
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Center Type</label>
        <select name="" class="form-select form-value-center" id="">
          <option value="0">Fully backed data</option>
          <option value="1">Partial backed data</option>
          <option value="2">Human backed data</option>
        </select>
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Country</label>
        <select name="" class="form-select form-value-center" id="">
          <option value="Nigeria">Nigeria</option>
          <option value="niger">Niger</option>
        </select>
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">State</label>
        <select name="" class="form-select form-value-center statesSelect" id="">
          <option value="kano">Kano</option>
          <option value="kaduna">Kaduna</option>
        </select>
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">L.G.A</label>
        <select name="" class="form-select form-value-center lgaSelect" id="">
          <option value="nasra">Nassarawa</option>
          <option value="albasa">Albasu</option>
        </select>
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Latitude</label>
        <input type="text" id="" class="form-control form-value-center" placeholder="" />
      </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Longitude</label>
        <input type="text" id="" class="form-control form-value-center" placeholder="" />
      </div>
      </div>
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary" id="addCenter">Register</button>
      </div>
    </div>
  </div>
</div>


  <!-- **************************************** Add student Modal **************************************** -->
  <!-- **************************************** Add student Modal **************************************** -->

  <div class="modal fade" id="addStudentModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
    <div class="modal-content stuForm">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel3">Add New Student</h5>
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
          <input type="text" id="" class="form-control form-value-student" placeholder="Aliyu" />
        </div>
        <div class="col mb-0">
          <label for="dobLarge" class="form-label">Last Name</label>
          <input type="text" id="dobLarge" class="form-control form-value-student" placeholder="Kamilu" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Nationality</label>
          <select name="" id="" class="form-select form-value-student">
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="Niger">Niger</option>
          </select>
        </div>
        <div class="col mb-0">
          <label for="dobLarge" class="form-label">Age</label>
          <input type="text" class="form-control form-value-student" name="">
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">State Of Origin</label>
          <select name="" id="" class="form-select form-value-student statesSelect">
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Borno">Borno</option>
          </select>
        </div>
        <div class="col mb-0">
          <label for="dobLarge" class="form-label">L.G.A</label>
          <select name="" id="" class="form-select form-value-student lgaSelect">
            <option value="Nassarawa">Nassarawa</option>
            <option value="Gusau">Gusau</option>
            <option value="Mariri">Mariri</option>
          </select>
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Education Background</label>
          <input type="text" id="" class="form-control form-value-student" placeholder="" />
        </div>
      </div>
      <h5 class="text-primary">PARENT/GUARDIAN</h5>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Name</label>
          <input type="text" id="" class="form-control form-value-parent" placeholder="Parent/Guardian Full Name" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Relationship</label>
          <input type='text' class='form-control form-value-parent'>
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
          <input type="text" id="" class="form-control form-value-parent" placeholder="Parent/Guardian Occupation" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Address</label>
          <input type="text" id="" class="form-control form-value-parent" placeholder="Parent/Guardian Address" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Phone Number</label>
          <input type="number" id="" class="form-control form-value-parent" placeholder="" />
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
          <input type="text" id="" class="form-control form-value-guard" placeholder="Full Name" />
        </div>
      </div>
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Relationship</label>
          <input type='text' class='form-control form-value-guard'>
        </div>
      </div>
    
      <div class="row g-2 mb-3">
        <div class="col mb-0">
          <label for="emailLarge" class="form-label">Address</label>
          <input type="text" id="" class="form-control form-value-guard" placeholder="Address" />
        </div>
      </div>
      <div class="row g-2 mb-3">
      <div class="col mb-0">
        <label for="emailLarge" class="form-label">Phone Number</label>
        <input type='number' class='form-control form-value-guard'>
      </div>
    </div>
      
      
      
      
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary" id="addStu">Add Student</button>
      </div>
    </div>
  </div>
</div>



`);

var exampleModals = document.querySelectorAll('#snapBtn')
var saveChnages = document.querySelector('#saveChangesBtn')
let stopCamera = document.querySelectorAll('.stopCamera')

// console.log(stopCamera)

exampleModals.forEach(exampleModal => {
    exampleModal.addEventListener('click', function () {
    //   console.log('hello')
    var recipient = ''
    recipient = exampleModal.getAttribute('data-bs-whatever')
    //   console.log(recipient)
    document.querySelector('#takeSnap').dataset.number = recipient      
      saveChnages.addEventListener('click', function() {
          $('#snapModal').modal('hide');
          $('#assistantModal').modal('hide');
          $('#addStudentModal').modal('hide');
          $(`#${recipient}`).modal('show');
          
          $('#preview').html('');
      })
      

    })
})

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
    // console.log(site_url);
    let regStudent = document.getElementById('addStu');
regStudent.addEventListener('click', addStudent);
function addStudent() {
  let valueFetchContainer = document.getElementsByClassName('form-value-student');
  //   console.log(valueFetchContainer);
  let arrObjectToSend = Array('center', 'fname', 'lname', 'country', 'age', 'state', 'lga', 'edu_background');
  console.log(site_url);
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
    console.log(editedText);
  fetch(`${hostLocal}php/?createStudent=&role=1&${editedText}`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse['status'] === 1) {
        let valueFetchContainerParent = document.getElementsByClassName('form-value-parent');
        let valueFetchContainerGuardian = document.getElementsByClassName('form-value-guard');

        let arrObjectToSendParent = Array('fullname', 'relationship', 'state', 'occupation', 'address', 'phone');
        let arrObjectToSendGuardian = Array('fullname_g', 'relationship_g', 'address_g','phone_g','occupation_g');

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

        fetch(`${hostLocal}php/?createStudent=&role=0&${editedText1}`)
          .then(response => response.json())
          .then(jsonResponse1 => {
            // console.log(jsonResponse1);
            if(jsonResponse1['status'] == 1){
                alert(jsonResponse1['message'])

                $.ajax({
                  type: "POST",
                  url: `${hostLocal}/php/index.php`,
                  data: { saveImg: '', st_image: site_url , connector: jsonResponse1['connector']},
                  dataType: "json",
                  // beforeSend: function () {
                  //   $('body').append(`
                  //     <div id="loading" class="loading">
                  //       <div class="d-flex justify-content-center align-items-center" style="height: 100%">
                  //         <img src="../img/loader.gif" alt="">
                  //       </div>
                  //     </div>
                  //   `)
              
                  // },
              });
                
            }
          });
      }
    });
}


// *******************************

let regUserAssstant = document.getElementById('addUserAssist');
regUserAssstant.addEventListener('click', regAssstant);
// ****************** All functions *****************//
function regAssstant() {
  let valueFetchContainer = document.getElementsByClassName('form-value1');
  //   console.log(valueFetchContainer);
  let arrObjectToSend = Array('fullname', 'country', 'state', 'lga', 'address', 'email', 'phone', 'center');
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
  console.log(editedText);
  fetch(`${hostLocal}php/?creatUserAssistant&${editedText}`)
    .then(response => response.json())
    .then(jsonResponse => {

      $.ajax({
        type: "POST",
        url: `${hostLocal}/php/index.php`,
        data: { centerAssImg: '', st_image: site_url , connector: jsonResponse['hash'], center: jsonResponse['hash']},
        dataType: "json",

    });

      Swal.fire({
        icon: 'success',
        text: jsonResponse['message'],
        confirmButtonText: 'close'
      });
    });
}



  });
}


$('#roleAdmin').on('change', function() {
    let theVal = $(this).val()
    
    if(theVal == 'SuperAdmin') {
        $('#selectionRole').html(``)
    } else if(theVal == 'Admin') {
        $('#selectionRole').html(`
            <div class="row g-2 mb-3">
            <div class="col mb-0">
              <label for="emailLarge" class="form-label">Select State</label>
              <select name="" id="" class="form-select form-value statesSelect">
                ${states}
              </select>
            </div>
            
          </div>
        `)
    } else {
         $('#selectionRole').html(`
            <div class="row g-2 mb-3">
            <div class="col mb-0">
              <label for="emailLarge" class="form-label">Assign Center</label>
              <select name="" id="send-worth130" class="form-select form-value ">
              </select>
            </div>
            
          </div>
        `)
        fetchCenter();
    }
})

let statesSelect = document.querySelectorAll('.statesSelect')
let lgaSelect = document.querySelectorAll('.lgaSelect')

if(statesSelect) {
    statesSelect.forEach((stateSelect) => {
        stateSelect.innerHTML = states
    })
}

statesSelect.forEach(stateSelect => {
    stateSelect.addEventListener('change', function (){
        let selectedState = $(this).val()
        console.log(stateSelect.selectedIndex)
        
        let arrStates = Object.values(lgaList)
        let finalarrState = arrStates[stateSelect.selectedIndex]
        
        lgaSelect.forEach((lgaSlt,i) => {
            lgaSlt.innerHTML = ''
            
            finalarrState.forEach((opt, ii) => {
                lgaSlt.innerHTML += `
                    <option value="${opt}">${opt}</option>
                `
            })
            
            
        })
        
    })
})




// $('#addStu').on('click', function () {
//   Swal.fire({
//     icon: 'success',
//     text: 'Abubakar has been added as student.',
//     confirmButtonText: 'close'
//   });
// });
// $('#addUser').on('click', function () {
//   Swal.fire({
//     icon: 'success',
//     text: 'Abubakar has been added as an Admin.',
//     confirmButtonText: 'close'
//   });
// });
$('#addCenter').on('click', function () {
  Swal.fire({
    icon: 'success',
    text: 'Kano Center 1 has been added as a center.',
    confirmButtonText: 'close'
  });
});

// Abubakar JS
let regUser = document.getElementById('addUser');
regUser.addEventListener('click', addUser);
// ****************** All functions *****************//
function addUser() {
  let valueFetchContainer = document.getElementsByClassName('form-value');
  console.log(valueFetchContainer)
  //   console.log(valueFetchContainer);
  let arrObjectToSend = Array('fullname', 'email', 'phone', 'country', 'state', 'lga', 'role', 'center', 'password');
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
  console.log(editedText);
  fetch(`${hostLocal}php/?creatUser&${editedText}`)
    .then(response => response.json())
    .then(jsonResponse => {
      Swal.fire({
        icon: 'success',
        text: jsonResponse['message'],
        confirmButtonText: 'close'
      });
    });
}



function fetchCenter(){
   fetch(`${hostLocal}php/?getCenters`)
  .then(response => response.json())
  .then(jsonResponse => {
      let getCenterAvailable = '';
    // console.log(jsonResponse);
    for (const key in jsonResponse) {
        
    //   console.log(jsonResponse[key]);
      getCenterAvailable += `
                  <option value="${jsonResponse[key]['encode_id']}">${jsonResponse[key]['centre_name']}</option>
          `;
    }
    // document.getElementById('send-worth').innerHTML = getCenterAvailable;
    // document.getElementById('send-worth130').innerHTML = getCenterAvailable;
    $('#send-worth130').html(getCenterAvailable)

   $('#send-worth13').html(getCenterAvailable)
    // document.getElementById('send-worth13').innerHTML = getCenterAvailable;
  }); 
}



let regCenter = document.getElementById('addCenter');
regCenter.addEventListener('click', centerAdd);
function centerAdd() {
  let valueFetchContainer = document.getElementsByClassName('form-value-center');
  //   console.log(valueFetchContainer);
  let arrObjectToSend = Array('center_name', 'center_type', 'center_country', 'center_state', 'center_lga', 'latitude', 'longitude');
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
  fetch(`${hostLocal}php/?addCenter&${editedText}`)
    .then(response => response.json())
    .then(jsonResponse => {
      Swal.fire({
        icon: 'success',
        text: jsonResponse['message'],
        confirmButtonText: 'close'
      });
    });
}


let getSame = document.getElementById('form-auto-fill');
getSame.addEventListener('click', getAllSame);
function getAllSame(){
  // alert("hi")
  let valueFetchContainerParent = document.getElementsByClassName('form-value-parent');
  let valueFetchContainerGuardian = document.getElementsByClassName('form-value-guard');
  valueFetchContainerGuardian[0].value = valueFetchContainerParent[0].value
  valueFetchContainerGuardian[1].value = valueFetchContainerParent[1].value
  valueFetchContainerGuardian[2].value = valueFetchContainerParent[4].value
  valueFetchContainerGuardian[3].value = valueFetchContainerParent[5].value


}
