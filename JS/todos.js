function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    const todosContainer = document.getElementById('todos-container')
    for(const todo of todos){
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <h3>id: ${todo.id}</h3>
            <h2> title: ${todo.title}</h2>
            <h3> isCompleted: ${todo.completed}</h3>
        `
        todosContainer.appendChild(newDiv);
    }
}
loadTodos();