function showtodo() {
    // Retrieve all saved todos from localStorage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Get the container where todos will be displayed
    let itemsContainer = document.querySelector(".todoo");

    // Iterate over the todos array and create HTML elements for each todo
    todos.forEach((todo, index) => {
        // Create a div for each todo item
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todos');

        // Create p elements for the serial number and todo text
        let sno = document.createElement('p');
        sno.textContent = index + 1; // Serial number

        let todoText = document.createElement('p');
        todoText.textContent = todo; // Todo text

        // Create delete button (using img element)
        let todoDel = document.createElement('img');
        todoDel.src = './delete.svg';  // Correct usage
        todoDel.height = "50";         // Height should be a number or string without "px"

        // Add event listener to handle deletion when clicked
        todoDel.addEventListener('click', () => {
            // Remove the corresponding todoDiv when delete button is clicked
            todoDiv.remove();
            // Optionally, update the todos array here if needed
            todos.splice(index, 1); // Remove the todo from the array
        });

        // Append the serial number, todo text, and delete button to the todoDiv
        todoDiv.appendChild(sno);
        todoDiv.appendChild(todoText);
        todoDiv.appendChild(todoDel);

        // Append the todoDiv to the items container
        itemsContainer.appendChild(todoDiv);
    });

}

// Call showtodo when the page loads
window.onload = showtodo;
