// yearly chart
var ctx = document.getElementById('yearlyWiseChart').getContext('2d');
var yearlyWiseChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'By Year',
      data: [10, 5, 20, 30, 40, 50, 100, 150, 250, 150, 10],
      backgroundColor: [
        '#D62728',
      ],
      barThickness: 35
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
          text: 'Year'
        }
      }
    }
  }
});