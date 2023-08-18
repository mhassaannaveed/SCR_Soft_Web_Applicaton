const ctx = document.getElementById('lineChart1');

const lineChart1 = new Chart(ctx, {
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