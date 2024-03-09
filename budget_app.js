let transactions = [];
let totalIncome = 0;
let totalBudget = 0;
let totalExpense = 0;

function addBudget()
{
    totalBudget = parseFloat(document.getElementById('budgetsum').value);
    updateBudgetSummary();
}

function addTransaction() {
    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value;
    const transactionType = document.getElementById("transactionType").value;

    if (isNaN(amount) || description.trim() === "") {
        alert("Please enter your valid amount...");
        return;
    }

    const transaction = {
        type: transactionType,
        amount: amount,
        description: description
    };

    transactions.push(transaction);

    if (transactionType === "income")
    {
        totalIncome += amount;
    } else 
    {
        totalExpense += amount;
    }

    updateTransactions();
    updateBudgetSummary();
}

function updateTransactions() 
{
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";
    transactions.forEach(transaction => {
        const listItem = document.createElement("li");
        listItem.textContent = `${transaction.description}: $${transaction.amount.toFixed(2)} (${transaction.type})`;
        transactionList.appendChild(listItem);
    });
}

function updateBudgetSummary() {
    document.getElementById("totalBudget").innerText = (totalBudget + totalIncome).toFixed(2);
    document.getElementById("totalIncome").innerText = totalIncome.toFixed(2);
    document.getElementById("totalExpense").innerText = totalExpense.toFixed(2);
    document.getElementById("totalBalance").innerText = (totalIncome - totalExpense).toFixed(2);
}
