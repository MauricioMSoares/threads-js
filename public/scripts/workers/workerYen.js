addEventListener("message", event => {
  apiConnect();
  setInterval(() => apiConnect(), 5000);
});

async function apiConnect() {
  const conn = await fetch("https://economia.awesomeapi.com.br/json/last/JPY-BRL");
  postMessage(await conn.json().JPYBRL);
}