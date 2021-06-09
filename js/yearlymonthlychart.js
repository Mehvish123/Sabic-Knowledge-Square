// yearly-monthly chart
var ymctx = document.getElementById('yearlyMonthlyChart').getContext('2d');
var yearlyMonthlyChart = new Chart(ymctx, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '2015', '', '2015', '', '', '', '', '', '', '', '', '', '2016', '', '2016', '', '', '', '', '', '', '', '', '', '2017', '', '2017', '', '', '', '', '', '', '', '', '', '2018', '', '2018', '', '', '', '', '', '', '', '', '', '2019', '', '2019', '', '', '', '', '', '', '', '', '', '2020', '', '2020', '', '', '', '', ''],
    datasets: [{
      label: 'By Year',
      data: [10, 10, 20, 5, 7, 8, 9, 6, 5, 1, 20, 11, 22, 2, 5, 7, 8, 9, 6, 5, 15, 20, 11, 22, 10, 10, 24, 5, 7, 8, 9, 6, 5, 40, 20, 11, 32, 20, 5, 7, 8, 9, 41, 50, 10, 20, 11, 22, 20, 10, 20, 5, 40, 22, 9, 6, 5, 10, 20, 11, 22, 20, 5, 7, 8, 9, 6, 5, 10, 20, 11, 22],
      backgroundColor: [
        '#299F29',
      ],
      barThickness: 4
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
    scales: {
      y: {
        title: {
          display: true,
          text: 'Count'
        }
      },
      x: {
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Year - Month'
        }
      }
    }
  }
});