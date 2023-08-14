const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")


//Adding a task function
function addTask(){
    if(inputBox.value === ''){
        alert('Please enter a task');
    }
    else {
        //Creating a list item
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}