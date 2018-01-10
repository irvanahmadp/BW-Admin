$(document).ready(function(){
	var chart1= $("#chart1");
	var myChart = new Chart(chart1, {
		type: 'bar',
			data: {
				labels: ["January", "February", "March", "April", "May", "June"],
				datasets: [{
					label: '# of users',
					data: [19, 25, 203, 235, 497, 521],
					borderWidth: 1,
					backgroundColor: "#28a745"
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});

	var chart2= $("#chart2");
	var myChart = new Chart(chart2, {
		type: 'line',
			data: {
				labels: ["January", "February", "March", "April", "May", "June"],
				datasets: [{
					label: '# of bounce',
					data: [5, 1, 9, 8, 9, 7],
					borderWidth: 1,
					backgroundColor: "#dc3545"
				}]
			},
			options: {
				scales: {
					yAxes: [{
						stacked: true
					}]
				},
				elements: {
					line: {
				    	tension: 0, // disables bezier curves
					}
				}
			}
		});

	$('table').DataTable();
});