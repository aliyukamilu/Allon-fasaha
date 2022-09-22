
window.addEventListener('load', allStudentFeedChart, false);

function allStudentFeedChart() {
  fetch(`${hostLocal}php/?allStudentFeedChart`)
    .then(response => response.json())
    .then(jsonResponse => {
      // console.log(jsonResponse[0]);
      const feed = jsonResponse
      console.log(feed)
      if ($('#totalLogFeed')) {
        const data = {
          labels: [
            'Logins',
            'Feedings'
          ],
          datasets: [{
            label: '',
            data: [feed.st_activities, feed.feeding,],
            backgroundColor: [
              '#96EAB7',
              '#A6CEE3',
            ],
            hoverOffset: 4
          }]
        };
      
        const config = {
          type: 'doughnut',
          data: data,
        };
      
        const myChart = new Chart(
          document.getElementById('totalLogFeed'),
          config
        );
      }
});
}


let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
$('#dailyWeeklyForm').on('change', function () {
  let val = $(this).val()
  if (val === 'daily') {
    $('#dailyWeekly').html(`
      < input type="date" class= "form-control form-control-sm" >
        `)
  } else if (val === 'weekly') {
    $('#dailyWeekly').html(`
        < input type="date" class= "form-control form-control-sm" >
          `)
  } else if (val === 'monthly') {
    let mack
    months.forEach((month) => {
      mack += `< option value='${month}' > ${month}</option > `
    })
    $('#dailyWeekly').html(`
  < select class= 'form-select form-select-sm' >
  ${mack}
  </select >
    `)
  }
  else if (val === 'yearly') {
    let mack
    months.forEach((month) => {
      mack += `< option value = '${month}' > ${month}</option > `
    })
    $('#dailyWeekly').html(`
  < select class= 'form-select form-select-sm' >
    <option value="2022">2022</option>
    <option value="2021">2021</option>
  </select >
    `)
  }
})
function initMap() {
  var options = {
    zoom: 10,
    center: { lat: 40.730610, lng: -73.935242 } //Coordinates of New York 
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  function addMarker(prop) {
    var marker = new google.maps.Marker({
      position: prop.coordinates, // Passing the coordinates
      map: map, //Map that we need to add
      draggarble: false// If set to true you can drag the marker
    });
    if (prop.iconImage) { marker.setIcon(prop.iconImage); }
    if (prop.content) {
      var information = new google.maps.InfoWindow({
        content: prop.content
      });

      marker.addListener('click', function () {
        information.open(map, marker);
      });
    }
  }

  addMarker({
    coordinates: { lat: 40.6782, lng: -73.9442 },
    iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
    content: `
    <h6>Kano Center 1</h6>
    <p>200 Students</p>
    `
  });
  addMarker({
    coordinates: { lat: 40.7831, lng: -73.9712 },
    iconImage: 'https://img.icons8.com/fluent/48/000000/marker-storm.png',
    content: `
    <h6>Kano Center 2</h6>
    <p>250 Students</p>`
  });

}

