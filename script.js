const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(e => {
    const price = parseFloat(e.textContent) || 0;
    total += price;
  });

  // Prevent multiple rows if button is clicked again
  const existingTotal = document.getElementById("total-row");
  if (existingTotal) existingTotal.remove();

  const newRow = document.createElement("tr");
  newRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.textContent = "Total Price";
  totalCell.colSpan = 1;

  const valueCell = document.createElement("td");
  valueCell.textContent = total;

  newRow.appendChild(totalCell);
  newRow.appendChild(valueCell);

  const table = document.querySelector("table");
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
