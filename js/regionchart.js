// region chart
var rctx = document.getElementById('regionChart').getContext('2d');
var regionChart = new Chart(rctx, {
  type: 'bar',
  data: {
    labels: ['AMR', 'UNKNOWN', 'APAC', 'EUR'],
    datasets: [{
      label: 'By Region',
      data: [245, 140, 15, 10],
      backgroundColor: [
        '#FF7F0E',
      ],
      barThickness: 30
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
          text: 'Region'
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