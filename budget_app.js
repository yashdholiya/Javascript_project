function calculateBudget() {
    var income = parseFloat(document.getElementById("income").value);
    var expenses = parseFloat(document.getElementById("expenses").value);

    if (isNaN(income) || isNaN(expenses)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
    } else {
        var budget = income - expenses;
        if (budget >= 0) {
            document.getElementById("result").innerHTML = "You have a surplus budget of " + budget.toFixed(2);
        } else {
            document.getElementById("result").innerHTML = "You are in a deficit of " + Math.abs(budget).toFixed(2);
        }
    }
}
