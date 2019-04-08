/* when add button is clicked:
    get text entered by user
    create new list item
    add list item to task list
    clear input box */

var taskInput = document.getElementById("task");
var taskList = document.getElementById("tasks");
var addButton = document.getElementById("add");
var clearButton = document.getElementById("clear");
var compTasks = document.getElementById("comptasks");

addButton.addEventListener("click", function(){
    var task = taskInput.value;
    // Don't add an empty string
    if(task.trim()){
        // add new task list item
        var newItem = document.createElement("LI");
        var taskText = document.createTextNode(task);
        newItem.appendChild(taskText);
        // clear text input box
        taskInput.value = "";
        //add remove option for task
        var doneButton = document.createElement("BUTTON");
        doneButton.innerHTML = "DONE";
        doneButton.addEventListener("click", removeTask);
        newItem.appendChild(doneButton);
        taskList.appendChild(newItem);
    }
    else{
        alert("Task cannot be empty");
    }
});

clearButton.addEventListener("click", function(){
    taskList.innerHTML = "";
});

function removeTask(ele) {
    var taskItem = ele.target.parentElement;
    compTasks.appendChild(taskItem);
}





