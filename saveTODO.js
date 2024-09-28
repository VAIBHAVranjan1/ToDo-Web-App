function saveTODO() {
    var todo = document.getElementById("toInput").value;

    if (todo) {
        // Retrieve existing todos from localStorage or initialize an empty array
        let todos = JSON.parse(localStorage.getItem('todos')) || [];

        // Add the new todo to the array
        todos.push(todo);

        // Save the updated array back to localStorage
        localStorage.setItem('todos', JSON.stringify(todos));

        alert('Todo saved!');

        // Clear the textarea after saving
        document.getElementById("toInput").value = '';
    }
}
