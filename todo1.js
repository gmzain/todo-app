let input = document.querySelector("#input");
let addBtn = document.querySelector("#addbtn");
let list = document.querySelector("#task");

let all = document.querySelector("#btn1")
let completed = document.querySelector("#btn2")
let pending = document.querySelector("#btn3")
let delCom = document.querySelector("#btn4")
let delAll = document.querySelector("#btn5")

let tasks = [];
let filter = "all"

addBtn.addEventListener("click" , () => {
    let value = input.value

    if(value.trim() === ""){
        return alert("Enter your Task")
    }

    tasks.push({
        text: value,
        completed: false
    })

    input.value = ""
    rendertask()
})

all.addEventListener("click" , () => {
    filter = "all"
    rendertask()
})

completed.addEventListener("click" , () => {
    filter = "completed"
    rendertask()
})

pending.addEventListener("click" , () => {
    filter = "pending"
    rendertask()
})

function rendertask() {
    list.innerHTML = "";

    let filterTask = tasks.filter((task)=> {
        if(filter === "completed"){
            return task.completed
        }else if(filter === "pending"){
            return !task.completed
        }else{
            return true
        }
    })

    filterTask.forEach((task , index) => {
        let div = document.createElement("div")
        div.classList.add("item")

        let leftSec = document.createElement("div")
        leftSec.classList.add("left-sec")

        let circle = document.createElement("div")
        circle.classList.add("circle")

        let p = document.createElement("p")
        p.classList.add("para")
        p.innerText = task.text

        let rightSec = document.createElement("div")
        rightSec.classList.add("right-sec")

        let delBtn = document.createElement("button")
        delBtn.classList.add("del")
        delBtn.innerText = "Del"

        let editBtn = document.createElement("button")
        editBtn.classList.add("edit")
        editBtn.innerText = "Edit"

        
        if(task.completed){
            circle.style.backgroundColor = "rgb(17, 197, 197)"
        }

        circle.addEventListener("click" , () => {
            task.completed = !task.completed
            rendertask()
        })

        delBtn.addEventListener("click" , () => {
            let realIndex = tasks.indexOf(task)
            tasks.splice(realIndex , 1)
            rendertask()
        })

        editBtn.addEventListener("click" , () => {
            if(editBtn.innerText === "Edit"){
                let editInput = document.createElement("input")
                editInput.classList.add("input")
                editInput.type = "text"
                editInput.value = task.text
                p.replaceWith(editInput)
                editBtn.innerText = "Save"
                editBtn.style.backgroundColor = "green"
            }else{
                let editInput = div.querySelector(".input")
                let value = editInput.value;
                let para = document.createElement("p")
                para.classList.add("para")
                para.innerText = value
                if(value.trim() === ""){
                    return alert("Enter your Task")
                }
                editInput.replaceWith(para)
                editBtn.innerText = "Edit"
                editBtn.style.backgroundColor = "rgb(243, 243, 26)"
            }
        })

        leftSec.append(circle , p)
        rightSec.append(delBtn , editBtn)
        div.append(leftSec , rightSec)
        list.appendChild(div)
    })     
}

delCom.addEventListener("click" , () => {
    tasks = tasks.filter(task => !task.completed)
    rendertask()
})

delAll.addEventListener("click" , () => {
    tasks = []
    rendertask()
})