window.addEventListener('load', allStudentFeedChart, false);

function allStudentFeedChart() {
  fetch(`${hostLocal}php/?allStudentFeedChart`)
    .then(response => response.json())
    .then(jsonResponse => {
      // console.log(jsonResponse[0]);
      const feed = jsonResponse;
      console.log(feed);
      if ($('#totalLogFeed')) {
        const data = {
          labels: ['Logins', 'Feedings'],
          datasets: [
            {
              label: '',
              data: [feed.st_activities, feed.feeding],
              backgroundColor: ['#96EAB7', '#A6CEE3'],
              hoverOffset: 4
            }
          ]
        };

        const config = {
          type: 'doughnut',
          data: data
        };

        const myChart = new Chart(document.getElementById('totalLogFeed'), config);
      }
    });
}

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
$('#dailyWeeklyForm').on('change', function () {
  let val = $(this).val();
  if (val === 'daily') {
    $('#dailyWeekly').html(`
      < input type="date" class= "form-control form-control-sm" >
        `);
  } else if (val === 'weekly') {
    $('#dailyWeekly').html(`
        < input type="date" class= "form-control form-control-sm" >
          `);
  } else if (val === 'monthly') {
    let mack;
    months.forEach(month => {
      mack += `< option value='${month}' > ${month}</option > `;
    });
    $('#dailyWeekly').html(`
  < select class= 'form-select form-select-sm' >
  ${mack}
  </select >
    `);
  } else if (val === 'yearly') {
    let mack;
    months.forEach(month => {
      mack += `< option value = '${month}' > ${month}</option > `;
    });
    $('#dailyWeekly').html(`
  < select class= 'form-select form-select-sm' >
    <option value="2022">2022</option>
    <option value="2021">2021</option>
  </select >
    `);
  }
});
function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGVlbmFsaXl1IiwiYSI6ImNsNDg5OWFtbzBxM2EzZW1zZjduajFpejIifQ.ikrIVPf6GeD7_Q1iKbDFaA';
  const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [8.7839, 12.1471],
    zoom: 8
  });

  // Create a default Marker and add it to the map.
  const marker1 = new mapboxgl.Marker({color: 'rgb(7, 51, 81)'}).setLngLat([8.7839, 12.1471]).addTo(map);

  // Create a default Marker, colored black, rotated 45 degrees.
  const marker2 = new mapboxgl.Marker({ color: 'rgb(247, 148, 29)', rotation: 45 })
    .setLngLat([8.9905, 12.0853])
    .addTo(map);
}
