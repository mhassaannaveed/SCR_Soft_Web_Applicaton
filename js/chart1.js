const ctx = document.getElementById("lineChart1");

const lineChart1 = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["July 17", "July 19", "July 21", "July 23", "July 25", "July 27"],
    datasets: [
      {
        label: "Current Week",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 3,
        borderColor: "#2E4EA5",
      },
      {
        label: "Previous Week",
        data: [5, 8, 14, 7, 9, 11],
        borderWidth: 3,
        borderColor: "#90BE6D",
      },
    ],
  },
  options: {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 8,
          display: false,
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});
