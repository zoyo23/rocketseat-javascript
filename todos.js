var listElements = document.querySelector("#app ul");
var inputElements = document.querySelector("#app input");
var buttonElements = document.querySelector("#app button");

var todos = [
    "Fazer café",
    "Estudar Javascript",
    "Acessar comunidade da Rocketseat"
];

function renderTodos() {
    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElements.appendChild(todoElement);
    }
}

renderTodos();