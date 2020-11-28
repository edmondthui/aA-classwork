const todos = JSON.parse(localStorage.getItem('todos')) || [];
const todoList = document.querySelector(".todos");
const todoForm = document.querySelector(".add-todo-form");
populateList();

const addTodo = (e) => {
    e.preventDefault();
    let input = document.querySelector(".add-todo")
    let inputValue = input.value;
    input.value = "";  
    todos.push({value: inputValue, done: false});
    localStorage.setItem('todos', JSON.stringify(todos));
    populateList();
}

function populateList() {
    todoList.replaceChildren();
    todos.forEach(function(todo) {
        let checkbox = document.createElement("input");
        checkbox.checked = todo.done;
        let label = document.createElement("label");
        label.innerHTML = todo.value;
        checkbox.setAttribute("id", `${todo.value}`)
        checkbox.setAttribute("type", "checkbox")
        let li = document.createElement("li");
        li.appendChild(checkbox);
        li.appendChild(label);
        todoList.appendChild(li);
    });
}

const checkbox = (e) => {
    todos.forEach(function(todo) {
        // debugger;
        if (todo.value === e.target.id) {
            // debugger;
            if (todo.done) {
                todo.done = false;
            } else {
                todo.done = true;
            }
        }
    })
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function todoHandler() {
    const todoSubmit = document.querySelector(".add-todo-form");
    todoSubmit.addEventListener("submit", addTodo);
}

export function checkboxHandler() {
    const todos = document.querySelector('.todos');
    todos.addEventListener("click", checkbox);
}


// innerText will show the value as is and ignores any HTML formatting which may be included
// innerHTML will show the value and apply any HTML formatting
// label appears to be the same as innerText, so I can't see the difference
// text appears to be the same as innerText but the jQuery shorthand version
// textContent appears to the same as innerText but keeps formatting (such as \n)
// outerText appears to be the same as innerText