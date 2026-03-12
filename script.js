let salary = localStorage.getItem("salary") ? Number(localStorage.getItem("salary")) : 0
let expenses = JSON.parse(localStorage.getItem("expenses")) || []

document.getElementById("salary").innerText = "₹" + salary

function setSalary(){

salary = Number(document.getElementById("salaryInput").value)

localStorage.setItem("salary", salary)

document.getElementById("salary").innerText = "₹" + salary

updateBalance()

}

function addExpense(){

let text = document.getElementById("expenseText").value
let category = document.getElementById("category").value
let date = document.getElementById("date").value
let amount = Number(document.getElementById("amount").value)

if(text === "" || amount === 0 || date === ""){
alert("Enter complete details")
return
}

let expense = {
text:text,
category:category,
date:date,
amount:amount
}

expenses.push(expense)

localStorage.setItem("expenses", JSON.stringify(expenses))

displayExpenses()

clearInputs()

}

function displayExpenses(){

let list = document.getElementById("list")
list.innerHTML = ""

let spent = 0

expenses.forEach((expense,index)=>{

spent += expense.amount

let li = document.createElement("li")

li.innerHTML = `${expense.date} | ${expense.text} (${expense.category}) ₹${expense.amount}
<button class="delete" onclick="deleteExpense(${index})">X</button>`

list.appendChild(li)

})

document.getElementById("spent").innerText = "₹" + spent
document.getElementById("remaining").innerText = "₹" + (salary - spent)

}

function deleteExpense(index){

expenses.splice(index,1)

localStorage.setItem("expenses", JSON.stringify(expenses))

displayExpenses()

}

function clearInputs(){

document.getElementById("expenseText").value=""
document.getElementById("amount").value=""
document.getElementById("date").value=""

}

displayExpenses()
