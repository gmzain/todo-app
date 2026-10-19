let addTask = document.querySelector(".add");
let input = document.querySelector(".input");
let taskList = document.querySelector(".task-list")
let search = document.querySelector(".search");

addTask.addEventListener("click" , ()=>{
    let value = input.value;

    
    if(value.trim() === ""){
        alert("Enter Something")
        return
    }


    let task = document.createElement("div");
    task.classList.add("task-item");

    let circle = document.createElement("div");
    circle.classList.add("circle");

    let text = document.createElement("p");
    text.classList.add("text");
    text.innerText = value;

    let textEl = document.createElement("div");
    textEl.classList.add("textel")

    let action = document.createElement("div");
    action.classList.add("action");

    let editTask = document.createElement("button");
    editTask.classList.add("edit");
    editTask.innerText = "Edit"

    let delTask = document.createElement("button");
    delTask.classList.add("del");
    delTask.innerText = "Del"

    textEl.append(circle , text)
    action.append(editTask , delTask)
    task.append(textEl , action )
    taskList.appendChild(task)

    input.value = ""

    delTask.addEventListener("click" , () => {
        task.remove()
    })

    editTask.addEventListener("click" , ()=> {
        if(editTask.innerText === "Edit"){
            let editInput = document.createElement("input");
            editInput.type = "text";
            editInput.classList.add("edit-input");
            text.replaceWith(editInput)
            editTask.innerText = "Save";
            editTask.style.backgroundColor = "green"
        }else{
            let editInput = task.querySelector("input")
            let newValue = editInput.value.trim();

            if(newValue === ""){
                return alert("Enter Something")
            }

            let newtext = document.createElement("p")
            newtext.classList.add("text");
            newtext.innerText = newValue 
            editInput.replaceWith(newtext);
            text = newtext;
            editTask.innerText = "Edit"
            editTask.style.backgroundColor = "rgb(241, 241, 91)";

        }
    })

    task.setAttribute("data-status" , "pending");
    circle.addEventListener("click" , () => {
        if(task.getAttribute("data-status") === "pending"){
            task.setAttribute("data-status" , "complete");
            circle.style.backgroundColor = "green"
        }else{
            task.setAttribute("data-status" , "pending");
            circle.style.backgroundColor = "transparent"
        }
    })


})

search.addEventListener("input" , () => {
   let value = search.value.toLowerCase();
   let allTask = document.querySelectorAll(".task-item");
   allTask.forEach((task)=> {
    let text = task.querySelector(".text").innerText.toLowerCase()
    if(text.includes(value)){
        task.style.display = "flex"
    }else{
        task.style.display = "none"
    }
   })
})

let all = document.querySelector(".btn1");

all.addEventListener("click" , () => {
    let allTask = document.querySelectorAll(".task-item");
    allTask.forEach((task) => {
        task.style.display = "flex";
    })
})

let complete = document.querySelector(".btn2");
complete.addEventListener("click" , () => {
    let allTask = document.querySelectorAll(".task-item");
    allTask.forEach((task) => {
        if(task.getAttribute("data-status") === "complete"){
            task.style.display = "flex"
        }else{
            task.style.display = "none"
        }
    })
})

let pending = document.querySelector(".btn3");
pending.addEventListener("click" , () => {
    let allTask = document.querySelectorAll(".task-item");
    allTask.forEach((task) => {
        if(task.getAttribute("data-status") === "pending"){
            task.style.display = "flex"
        }else{
            task.style.display = "none"
        }
    })
})

