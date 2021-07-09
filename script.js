function compute() {
    var amount = parseFloat(document.getElementById("amount").value);
    var rate = parseFloat(document.getElementById("input_rate_range").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = amount * years * rate / 100;
    var pay_year = new Date().getFullYear() + years;

    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + amount + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + pay_year + "</mark>";
}

function updateRate(updated_rate) {
    document.getElementById("rate_display").innerText = updated_rate;
}

function validateInput() {
    var amount = document.getElementById("amount").value
    if (amount == "") {
        return false;
    }
    if (amount <= 0) {
        alert("Amount must be positive!");
        document.getElementById("amount").focus(); 
        return false;
    }
    return true;
}
