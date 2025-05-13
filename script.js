const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const totalPrice = document.querySelectorAll(".price");
let total = 0;
	
	totalPricerice.forEach(e => {
    // Get number from innerText and convert to float
		e.preventDefault();
    const price = parseFloat(e.textContent) || 0;
    total += price;
  });
	
		const newRow = document.createElement('tr');
		const totalCell = document.createElement('td');

	totalCell.textContent = `Total Price: ${total}`;
	newRow.appendChild(totalCell);

	const table = document.querySelector('table');
	table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

