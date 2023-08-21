const ctr = document.getElementById("lineChart2");

const lineChart2 = new Chart(ctr, {
  type: "line",
  data: {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "current week",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: "#2E4EA5",
        borderWidth: 3,
        pointBackgroundColor: "#00B7FF",
        pointBorderColor: "#00B7FF",
        pointBorderWidth: 4, // Set the border width of the points
        pointRadius: 1,
      },
    ],
  },
  options: {
    tension: 0.5,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#B2B3B7",
        },
        border: {
          dash: [2, 4],
        },
        ticks: {
          color: "#B2B3B7",
        },
        barPercentage: 0.5, // Adjust this value to control the spacing
        categoryPercentage: 0.5, // Adjust this value to control the spacing
      },
      y: {
        grid: {
          color: "#B2B3B7",
        },
        border: {
          dash: [2, 4],
        },
      },
    },
  },
});
