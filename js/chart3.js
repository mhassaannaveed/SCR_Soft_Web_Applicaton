const ctr = document.getElementById('lineChart2');

const lineChart2 = new Chart(ctr, {
  type: 'line',
  data: {
    labels: ['July', 'July', 'July', 'July', 'July', 'July'],
    datasets: [{
      label: 'current week',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});