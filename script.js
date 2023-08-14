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
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();

}
//Changing the list item and span to add or delete and reflect the CSS built
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        //Adding to the checked class
        e.target.classList.toggle("checked");
        //Saving the data to the browser so it doesn't delete after refreshing
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
}, false);

//Keeping the task on the list even after refresh
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
