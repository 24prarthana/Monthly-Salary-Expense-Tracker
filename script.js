let salary = 0
let spent = 0

function setSalary(){

salary = Number(document.getElementById("salaryInput").value)

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

spent += amount

let li = document.createElement("li")

li.innerHTML = `${date} | ${text} (${category}) ₹${amount}
<button class="delete" onclick="deleteExpense(this,${amount})">X</button>`

document.getElementById("list").appendChild(li)

updateBalance()

document.getElementById("expenseText").value=""
document.getElementById("amount").value=""
document.getElementById("date").value=""

}

function deleteExpense(btn,amount){

btn.parentElement.remove()

spent -= amount

updateBalance()

}

function updateBalance(){

document.getElementById("spent").innerText = "₹" + spent
document.getElementById("remaining").innerText = "₹" + (salary - spent)

}