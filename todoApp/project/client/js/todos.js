if (!isLoggedIn()) {
    window.location.href = "login.html";
}

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");

const todoError = document.getElementById("todoError");

const logoutBtn = document.getElementById("logoutBtn");

const addTodoBtn = document.getElementById("addTodoBtn");

const emptyState = document.getElementById("emptyState");
const todoTable = document.getElementById("todoTable");


const username = document.getElementById("username");
const email = localStorage.getItem("email");

function toggleEmptyState() {

    if (todoTable.children.length === 0) {
        emptyState.classList.remove("d-none");
    } else {
        emptyState.classList.add("d-none");
    }

}

logoutBtn.addEventListener("click", function (event) {
    event.preventDefault();

    removeToken();

    window.location.href = "login.html";
});

todoForm.addEventListener("submit", function (event) {

    addTodoBtn.disabled = true;
    addTodoBtn.textContent = "Saving...";

    event.preventDefault();

    todoError.classList.add("d-none");

    const todo = todoInput.value.trim();

    if (todo === "") {

        todoError.textContent = "Task cannot be empty.";
        todoError.classList.remove("d-none"); 

        addTodoBtn.disabled = false;
        addTodoBtn.textContent = "Add Task";

        return;
    }

    console.log(todo);

    addTodoBtn.disabled = false;
    addTodoBtn.textContent = "Add Task";

    todoInput.value = "";

});

toggleEmptyState();

function renderTodos(todos) {

    todoTable.innerHTML = "";

    todos.forEach((todo, index) => {

        const row = `
            <tr>
                <td>${index + 1}</td>

                <td>${todo.title}</td>

                <td>
                    ${
                        todo.completed
                        ? '<span class="badge bg-success">Completed</span>'
                        : '<span class="badge bg-warning text-dark">Pending</span>'
                    }
                </td>

                <td class="text-end">
                    ${
                        !todo.completed
                        ? `<button class="btn btn-success btn-sm complete-btn" data-id="${todo.id}">Complete</button>`
                        : ""
                    }

                    <button class="btn btn-danger btn-sm delete-btn"  data-id="${todo.id}">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        todoTable.innerHTML += row;

    });

    toggleEmptyState();

}

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("complete-btn")) {

        const id = Number(event.target.dataset.id);

        const todo = todos.find(todo => todo.id === id);

        todo.completed = true;

        renderTodos(todos);

    }

});

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {

        const id = Number(event.target.dataset.id);

        const index = todos.findIndex(todo => todo.id === id);

        todos.splice(index, 1);

        renderTodos(todos);

    }

});

if (email) {

    const name = email.split("@")[0];

    username.textContent = `Hello, ${name}`;

}

renderTodos(todos);