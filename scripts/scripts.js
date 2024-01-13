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

function generateTime() {
	const date = new Date();
	const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

	return time;
};

function addData(dash, subtitles, data) {
	dash.data.labels.push(subtitles);
	dash.data.datasets.forEach(element => {
		element.data.push(data);
	});
	dash.update();
};

const workerDollar = new Worker("./scripts/workers/workerDollar.js");
workerDollar.postMessage("usd");
workerDollar.addEventListener("message", event => {
	const time = generateTime();
	const value = event.data.ask;
	printQuotation("USD", value);
	addData(dollarChartDash, time, value);
});