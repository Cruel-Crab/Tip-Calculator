let container = document.getElementById("container");

function formatMoney (value) {
	value = Math.ceil(value * 100) / 100;
	value = value.toFixed(2);
	return "₹ " + value;
}
function formatSplit (value) {
	if(value === '1'){
		return value + " person";
	}
	else{
		return value + " people";
	}
}

function update () {
	let bill = Number(document.getElementById("yourBill").value);
	let tipPercent = document.getElementById("selectTip").value;
	let split = document.getElementById("splitInput").value;
	

	let tipValue = bill * (tipPercent / 100); //100 * 15%
	let tipEach = tipValue / split;
	let newBillEach = (bill + tipValue) /split;
	

	document.getElementById("tipPercent").innerHTML = tipPercent + "%";
	document.getElementById("tipValue").innerHTML = formatMoney(tipValue) ;
	document.getElementById("totalWithTip").innerHTML = formatMoney(bill + tipValue);

	document.getElementById("splitValue").innerHTML = formatSplit(split);
	document.getElementById("billEach").innerHTML = formatMoney(newBillEach);
	document.getElementById("tipEach").innerHTML = formatMoney(tipEach);
}
container.addEventListener('input',update);