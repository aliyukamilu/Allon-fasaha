// const hostLocal = 'http://localhost/allonfasaha/'

if ($('#centerChart')) {
  const labels = [
    'Today',
    '12th March',
    '11th March',
    '10th March'
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Login',
        backgroundColor: '#23608A',
        borderColor: 'rgb(255, 99, 132)',
        borderRadius: 5,
        barThickness: 20,
        data: [10, 30, 50, 32],

      },
      {
        label: 'Feeding',
        backgroundColor: '#F7941D',
        borderColor: 'rgb(255, 99, 132)',
        borderRadius: 5,
        barThickness: 20,
        data: [12, 29, 48, 32],
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      barValueSpacing: 20,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
          }
        }]
      }
    }
  };
  const myChart = new Chart(
    document.getElementById('centerChart'),
    config
  );
}

window.addEventListener('load', mainTop, false);
function mainTop() {
  let queryString = location.search.substring(1);
  let linkFetch = queryString.split('?');
  let getTables = '';
  fetch(`${hostLocal}php/?getCenterMetrix&id=${linkFetch[0]}`)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse)
      document.getElementsByClassName('top-info')[0].innerHTML = jsonResponse['access_students'];
      document.getElementsByClassName('top-info')[4].innerHTML = jsonResponse['access_students'];

      document.getElementsByClassName('top-info')[1].innerHTML = jsonResponse['time_spent'];
      document.getElementsByClassName('top-info')[2].innerHTML =
        jsonResponse['access_students'] - jsonResponse['time_spent'];
    });
  fetch(`${hostLocal}php/?getCenterInfo&id=${linkFetch[0]}`)
    .then(response => response.json())
    .then(jsonResponse => {
        console.log(jsonResponse);
        document.getElementsByClassName('chest-info')[0].innerHTML = jsonResponse[0];
        document.getElementsByClassName('chest-info')[1].innerHTML = jsonResponse[1];
        document.getElementsByClassName('chest-info')[2].innerHTML = jsonResponse[2];
        document.getElementsByClassName('chest-info')[3].innerHTML = jsonResponse[3];
        document.getElementsByClassName('chest-info')[4].innerHTML = jsonResponse[4];
        document.getElementsByClassName('chest-info')[5].innerHTML = jsonResponse[5];
        document.getElementsByClassName('chest-info')[6].innerHTML = jsonResponse[6];
        document.getElementsByClassName('chest-info')[7].innerHTML = jsonResponse[7];
        $('#adimage').html(`<img class="rounded-circle" src="${jsonResponse[8]}" width="100">`)
    });
}
