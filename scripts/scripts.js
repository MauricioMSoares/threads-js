const dollarChart = document.getElementById("dollarChart");

const dollarChartDash = new Chart(dollarChart, {
	type: 'line',
	data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			borderWidth: 1
		}]
	},
});

async function apiConnect() {
	const conn = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
	console.log(await conn.json());
};

apiConnect();