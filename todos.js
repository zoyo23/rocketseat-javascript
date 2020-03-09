var listElements = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElements = document.querySelector("#app button");

var todos = [
    "Fazer café",
    "Estudar Javascript",
    "Acessar comunidade da Rocketseat"
];

function renderTodos() {
    listElements.innerHTML = "";
    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElements.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
}

buttonElements.onclick = addTodo;