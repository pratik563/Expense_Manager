
# Expense Tracker - Code Structure and Explanation

## Overview
This document explains the structure and functionality of the **Expense Tracker** project. The project consists of three main files: `index.html`, `style.css`, and `script.js`. Each file plays a specific role in the overall functionality and design of the application.

## 1. `index.html` (HTML Structure)
The `index.html` file is responsible for defining the structure and layout of the Expense Tracker. It contains the following key sections:

- **Title and Heading**: The title of the page is set as "Expense Tracker," and an `h1` heading is displayed at the top.
- **Form Section**: This section allows users to input their transaction details, such as the date, description, category, and amount. It includes input fields, a category dropdown, and buttons for adding income or expenses.
- **Summary Section**: Displays the total income, total expenses, and net income based on the transactions added by the user.
- **Transactions Section**: Displays the list of all transactions, including the date, description, category, and amount. Each transaction also includes a "Delete" button to remove the entry.

## 2. `style.css` (Styling)
The `style.css` file is responsible for styling the various elements of the Expense Tracker. Key points include:

- **Layout**: The page is centered using a container with specific width and margin properties to ensure a consistent look across different screen sizes.
- **Form Elements**: Input fields, buttons, and the category dropdown are styled for a uniform appearance. Responsive design techniques are applied to ensure proper display on both mobile and larger screens.
- **Buttons**: The "Add Income" and "Add Expense" buttons are styled with different colors and hover effects to visually distinguish them. Additionally, the "Delete" buttons for each transaction are sized appropriately for mobile and desktop views.

## 3. `script.js` (JavaScript Logic)
The `script.js` file handles the core functionality of the Expense Tracker. It includes:

### Key Functions:
- **addTransaction(type)**: Adds a new transaction based on user input. It validates the form fields, calculates the amount (positive for income, negative for expenses), and updates the list of transactions.
- **displayTransactions()**: Updates the transactions section with all the transactions from the array, dynamically creating list items for each entry.
- **calculateSummary()**: Calculates and updates the total income, total expenses, and net income based on the transactions array.
- **deleteTransaction(index)**: Removes a transaction from the array and updates the display.
- **saveTransactions()**: Stores transactions in the browser's local storage so that data is persisted across sessions.
- **loadTransactions()**: Loads transactions from local storage when the page is reloaded, ensuring that the transaction history is preserved.
- **filterTransactionsByCategory(category)**: Filters the displayed transactions based on the selected category, allowing users to view specific types of transactions.

### Project Flow
1. **User Interaction**:
   - The user adds a transaction by filling out the form and clicking **Add Income** or **Add Expense**.
   - The form input is validated, and if successful, the transaction is added to the list.
2. **Display and Calculation**:
   - The transaction is displayed in the transactions list, and the summary is updated with the new totals.
3. **Delete Transaction**:
   - The user can delete a transaction by clicking the "Delete" button next to each entry.
4. **Filtering**:
   - Users can filter transactions by selecting a category from the dropdown.

## Conclusion
The Expense Tracker is designed to be a user-friendly tool for managing income and expenses. The project demonstrates basic web development concepts such as HTML structure, CSS styling, and JavaScript functionality. It also includes more advanced features like local storage and filtering to enhance user experience.
