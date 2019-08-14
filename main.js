"use strict";

//EVENT LISTENERS

const addPriority1 = document.querySelector(".priority1");
const addPriority2 = document.querySelector(".priority2");
const addPriority3 = document.querySelector(".priority3");


const userInput = document.querySelector(".userInput");
userInput.onclick = userInput.value;

const pendingTodo = document.querySelector(".pendingTodo");


//printing to DOM
function printTodo(todo, priority) {
    const dropDown = document.querySelectorAll(".dropdown-menu .dropdown-item");

    const pendingTodo = document.querySelector(".pendingTodo");
    let li = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.className = "form-check-input";
    checkBox.type = "checkbox";
    const task = document.createElement("p");

    if (priority === 1) {
        li.style.color = "red";
        li.style.fontWeight = 'bold';
    } else if (priority === 2) {
        li.style.color = "orange";
    } else {
        li.style.color = "black";
    }

    task.innerText = todo;
    li.appendChild(checkBox);
    li.appendChild(task);

    pendingTodo.appendChild(li);

    li.addEventListener("change", (event) => {
        let todoArray = Array.from(pendingTodo.childNodes)
        if (checkBox.checked) {

            console.log(`line 46 from main.js:`)
            console.log(todoArray.indexOf(event.currentTarget))
        }
        console.log(pendingTodo[parseInt(todoArray.indexOf(event.currentTarget))])
    });
    clearList()
}



addPriority1.addEventListener("click", function (event) {
    const userInput = document.querySelector(".userInput");
    printTodo(userInput.value, parseInt(event.target.getAttribute("value")));
});

addPriority2.addEventListener("click", function (event) {
    const userInput = document.querySelector(".userInput");
    printTodo(userInput.value, parseInt(event.target.getAttribute("value")));
});

addPriority3.addEventListener("click", function (event) {
    const userInput = document.querySelector(".userInput");
    printTodo(userInput.value, parseInt(event.target.getAttribute("value")));
});

//1. check the box for complete
//   -copy the item to be deleted
//   -delete from dom the checked item
//-----> move completed item to done shit div

function moveToDone() {


}


function clearList() {
    // Grab the todo list ul and put it in a variable
    const list = document.querySelector('.completedTodo');

    // Remove all children of that list.
    while (list.hasChildNodes()) {
        list.firstChild.remove();
    }
}