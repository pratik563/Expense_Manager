document
  .getElementById("addIncome")
  .addEventListener("click", () => addTransaction("income"));
document
  .getElementById("addExpense")
  .addEventListener("click", () => addTransaction("expense"));
document
  .getElementById("filterCategory")
  .addEventListener("change", filterTransactions);

window.addEventListener("load", loadTransactions);

let transactions = [];

function addTransaction(type) {
  const date = document.getElementById("date").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!date || !description || !category || isNaN(amount) || amount < 0) {
    alert(
      "Please fill out all fields with valid data. Amount should be a positive number."
    );
    return;
  }

  const transaction = {
    date,
    description,
    category,
    amount: type === "income" ? amount : -amount,
  };

  transactions.push(transaction);
  saveTransactions();
  filterTransactions(); // Call filter after adding a new transaction
  calculateSummary();
  clearInputs();
}

function displayTransactions(filteredTransactions) {
  const transactionsList = document.getElementById("transactionsList");
  transactionsList.innerHTML = "";

  filteredTransactions.forEach((transaction, index) => {
    const transactionItem = document.createElement("li");
    transactionItem.innerHTML = `
            ${transaction.date} - ${transaction.description} - ${
      transaction.category
    } - $${Math.abs(transaction.amount)}
            <button onclick="deleteTransaction(${index})">Delete</button>
        `;
    transactionsList.appendChild(transactionItem);
  });
}

function filterTransactions() {
  const filterCategory = document.getElementById("filterCategory").value;
  const filteredTransactions = transactions.filter(
    (transaction) =>
      filterCategory === "All" || transaction.category === filterCategory
  );
  displayTransactions(filteredTransactions);
}

function calculateSummary() {
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      totalIncome += transaction.amount;
    } else {
      totalExpenses += transaction.amount;
    }
  });

  document.getElementById("totalIncome").textContent = `$${totalIncome.toFixed(
    2
  )}`;
  document.getElementById("totalExpenses").textContent = `$${Math.abs(
    totalExpenses
  ).toFixed(2)}`;
  document.getElementById("netIncome").textContent = `$${(
    totalIncome + totalExpenses
  ).toFixed(2)}`;
}

function deleteTransaction(index) {
  transactions.splice(index, 1);
  saveTransactions();
  filterTransactions(); // Call filter after deletion
  calculateSummary();
}

function clearInputs() {
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("date").focus();
}

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadTransactions() {
  const savedTransactions = localStorage.getItem("transactions");
  if (savedTransactions) {
    transactions = JSON.parse(savedTransactions);
    filterTransactions(); // Call filter on load
    calculateSummary();
  }
}
