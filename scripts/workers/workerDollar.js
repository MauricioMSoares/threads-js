async function apiConnect() {
  const conn = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
  postMessage(await conn.json().USDBRL.ask);
};

addEventListener("message", () => {
  apiConnect();
  setInterval(() => apiConnect(), 5000);
});