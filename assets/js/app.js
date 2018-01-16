$(document).ready(function(){
	var chart1= $("#chart1");
	var dataChart={
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [{
			label: 'session',
			data: [19, 25, 99, 335, 175, 217],
			borderWidth: 1.5,
			/*backgroundColor: "#007bff"*/
			borderColor: "rgba(0, 123, 255, 1)",
			backgroundColor: "rgba(0, 123, 255, 0.5)",
			fill: false
		},{
			label: 'users',
			data: [19, 25, 99, 115, 497, 521],
			borderWidth: 1.5,
			/*backgroundColor: "#28a745"*/
			borderColor: "rgba(40, 167, 69, 1)",
			backgroundColor: "rgba(40, 167, 69, 0.5)",
			fill: false
		},{
			label: 'views',
			data: [19, 25, 99, 512, 791, 719],
			borderWidth: 1.5,
			/*backgroundColor: "#17a2b8"*/
			borderColor: "rgba(23, 162, 184, 1)",
			backgroundColor: "rgba(23, 162, 184, 0.5)",
			fill: false
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