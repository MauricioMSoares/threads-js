import printQuotation from "./printQuotation";

const dollarChart = document.getElementById("dollarChart");

const dollarChartDash = new Chart(dollarChart, {
	type: 'line',
	data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: 'Dollar',
			data: [],
			borderWidth: 1
		}]
	},
});

setInterval(() => apiConnect(), 5000);

async function apiConnect() {
	const conn = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
	let time = generateTime();
	let value = await conn.json().USDBRL.ask;
	addData(dollarChartDash, time, value);
	printQuotation("USD", value);
};

function generateTime() {
	let date = new Date();
	let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	return time;
};

function addData(dash, subtitles, data) {
	dash.data.labels.push(subtitles);
	dash.data.datasets.forEach(element => {
		element.data.push(data);
	});
	dash.update();
};