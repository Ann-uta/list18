let note = document.getElementById("newTask");

/*class Task{
    constructor(status, name){
        this.status = status;
        this.name = name;
    }
}*/

let tasks = [];
if (localStorage.getItem("tasks")!=null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

function finishTask(checkbox) {
    checkbox.parentElement.classList.toggle("done");
}

function addTask(){
    if (note.value != "") {   
    tasks.push(note.value);
    generateTasks();
}else{
        alert("Добавьте заметку")
    }
document.getElementById("newTask").value = "";
}

function generateTasks(){
    let noteItem = ""; 
    for (let task of tasks) {
        noteItem +=`<div><input type="checkbox" onchange="finishTask(this)"><span>${task}</span></div>`;        
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    document.getElementById("container").innerHTML = noteItem;    
}

document.addEventListener("DOMContentLoaded", function (){    
    generateTasks();
});