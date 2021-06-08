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
        '#0047BB',
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
        '#e6840e',
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

// yearly-monthly chart
var ymctx = document.getElementById('yearlyMonthlyChart').getContext('2d');
var yearlyMonthlyChart = new Chart(ymctx, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '', '', '2015', '', '', '', '', '', '', '', '', '', '', '', '2016', '', '', '', '', '', '', '', '', '', '', '', '2017', '', '', '', '', '', '', '', '', '', '', '', '2018', '', '', '', '', '', '', '', '', '', '', '', '2019', '', '', '', '', '', '', '', '', '', '', '', '2020', '', '', '', '', ''],
    datasets: [{
      label: 'By Year',
      data: [10, 10, 20, 5, 7, 8, 9, 6, 5, 1, 20, 11, 22, 2, 5, 7, 8, 9, 6, 5, 15, 20, 11, 22, 10, 10, 24, 5, 7, 8, 9, 6, 5, 40, 20, 11, 32, 20, 5, 7, 8, 9, 41, 50, 10, 20, 11, 22, 20, 10, 20, 5, 40, 22, 9, 6, 5, 10, 20, 11, 22, 20, 5, 7, 8, 9, 6, 5, 10, 20, 11, 22],
      backgroundColor: [
        '#099c0e',
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

// yearly chart
var yctx = document.getElementById('yearlyChart').getContext('2d');
var yearlyChart = new Chart(yctx, {
  type: 'bar',
  data: {
    labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
      label: 'By Year',
      data: [10, 5, 20, 30, 40, 50, 100, 150, 250, 150, 10],
      backgroundColor: [
        '#ad1303',
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
