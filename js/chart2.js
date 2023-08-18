const cto = document.getElementById('doughnutChart');
const data = {
    labels: [
        'Sales',
        'Completed',
        'Pending'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [70, 25, 5],
        backgroundColor: [
            'rgba(46, 78, 165, 1)',
            'rgba(249, 199, 79, 1)',
            'rgba(144, 190, 109, 1)'
        ],
        hoverOffset: 4
    }]
};
const doughnut = new Chart(cto, {
    type: 'doughnut',
    data: data,
})
