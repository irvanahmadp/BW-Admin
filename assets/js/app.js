$(document).ready(function(){
	var chart1= $("#chart1");
	var dataChart={
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [{
			label: '# of session',
			data: [19, 25, 99, 115, 175, 217],
			borderWidth: 1,
			/*backgroundColor: "#007bff"*/
			backgroundColor: "rgba(0, 123, 255, 0.75)"
		},{
			label: '# of users',
			data: [19, 25, 99, 335, 497, 521],
			borderWidth: 1,
			/*backgroundColor: "#28a745"*/
			backgroundColor: "rgba(40, 167, 69, 0.75)"
		},{
			label: '# of views',
			data: [19, 25, 99, 512, 791, 719],
			borderWidth: 1,
			/*backgroundColor: "#17a2b8"*/
			backgroundColor: "rgba(23, 162, 184, 0.75)"
		}]
	};
	var myChart = new Chart(chart1, {
		type: 'bar',
			data: dataChart,
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
			data: dataChart,
			options: {
				scales: {
					yAxes: [{
						beginAtZero:true,
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