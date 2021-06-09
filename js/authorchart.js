// author chart
var actx = document.getElementById('authorChart').getContext('2d');
var authorChart = new Chart(actx, {
  type: 'bar',
  data: {
    labels: ['Fickel, Dustin', 'Nguyen, Cong', 'Shou, Heng', 'Dasari, Prasanna', 'Kulkarni, Neeta', 'barton, Katherine', 'Ghosh, Ashim', 'Broekhuis, Robert', 'baek, Byeongjin', 'Stevenson, Scott'],
    datasets: [{
      label: 'By Author',
      data: [33, 26, 22, 17, 12, 12, 11, 10, 9, 8],
      backgroundColor: [
        '#1F77B4',
      ],
      barThickness: 12
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    responsive: true,
    indexAxis: 'y',
    scales: {
      y: {
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Author'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Count'
        }
      }
    }
  }
});