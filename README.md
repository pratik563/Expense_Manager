# Expense Tracker

## Overview
The **Expense Tracker** is a simple web application that allows users to record, manage, and track their expenses and income. It provides a clear summary of total income, total expenses, and net balance. Users can add transactions, view them in a list, and filter by category.

## Features
- Add and categorize transactions as **Income** or **Expense**
- View a summary of **Total Income**, **Total Expenses**, and **Net Income**
- Filter transactions by category
- Delete transactions
- Persist transactions using **localStorage**
- Responsive design, suitable for both desktop and mobile devices

## Technologies Used
- **HTML** for the structure of the web page
- **CSS** for styling
- **JavaScript** for dynamic interactions and transaction management
- **LocalStorage** for data persistence across sessions

## Getting Started

### Prerequisites
To run this application, you only need a web browser. No additional installations are required.

### Running the Application
1. **Clone the repository**:
    ```bash
    git clone https://github.com/pratik563/Expense-Manager.git
    ```

2. **Navigate to the project folder**:
    ```bash
    cd expense-tracker
    ```

3. **Open `index.html` in a browser**:
    Simply open the `index.html` file in any modern web browser. You can double-click the file or drag it into your browser's window.

### Usage Instructions
1. Enter the **Date**, **Description**, **Category**, and **Amount** of a transaction.
2. Click **Add Income** to add an income transaction or **Add Expense** to add an expense transaction.
3. View your transactions in the **Transactions List**.
4. **Filter by Category**: Use the dropdown in the transaction list to filter transactions based on their category.
5. The **Summary Section** will display your **Total Income**, **Total Expenses**, and **Net Income**.
6. To **delete** a transaction, click the **Delete** button next to the transaction in the list.

### Responsive Design
- The application adjusts to different screen sizes, making it mobile-friendly.
- On mobile devices, buttons and inputs are optimized for better usability.

## Project Structure
```bash
expense-tracker/
│
├── index.html        # Main HTML file
├── style.css         # CSS for styling
└── script.js         # JavaScript file for handling logic
