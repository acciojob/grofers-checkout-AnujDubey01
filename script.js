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
 const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.textContent = `Total Price: ₹${total}`;
    newRow.appendChild(totalCell);

    const table = document.querySelector('table');
    table.appendChild(newRow);

    // Add total price to an element with ID 'ans'
    let ansElement = document.getElementById('ans');
    if (!ansElement) {
        ansElement = document.createElement('div');
        ansElement.id = 'ans';
        document.body.appendChild(ansElement);
    }
    ansElement.textContent = `Total Price: ₹${total}`; // Display the total price
};

getSumBtn.addEventListener("click", getSum);
