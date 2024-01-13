const list = document.querySelector("[data-lista]");

function printQuotation(quotation, value) {
  list.innerHTML = "";

  for (i = 1; i <= 1000; i *= 10) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${i} ${quotation}: R$${(value * i).toFixed(2)}`;
    list.appendChild(listItem);
  };
};

export default printQuotation;