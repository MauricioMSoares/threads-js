import selectQuotation from "./printQuotation";

window.addEventListener('DOMContentLoaded', (event) => {
	const dollarChart = document.getElementById("dollarChart");

	const dollarChartDash = new Chart(dollarChart, {
		type: 'line',
		data: {
			labels: [],
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
		selectQuotation("USD", value);
		addData(dollarChartDash, time, value);
	});

	const yenChart = document.getElementById("yenChart");
	const yenChartDash = new Chart(yenChart, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Yen',
				data: [],
				borderWidth: 1
			}]
		}
	});

	const workerYen = new Worker("./scripts/workers/workerYen.js");
	workerYen.postMessage("jpy");
	workerYen.addEventListener("message", event => {
		const time = generateTime();
		const value = event.data.ask;
		selectQuotation("JPY", value);
		addData(yenChartDash, time, value);
	});

	const wonChart = document.getElementById("wonChart");
	const wonChartDash = new Chart(wonChart, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Won',
				data: [],
				borderWidth: 1
			}]
		}
	});

	const workerWon = new Worker("./scripts/workers/workerWon.js");
	workerWon.postMessage("won");
	workerWon.addEventListener("message", event => {
		const time = generateTime();
		const value = event.data.ask;
		selectQuotation("WON", value);
		addData(wonChartDash, time, value);
	})
});