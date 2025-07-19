//taking references 
let container=document.getElementById("container")
let inputTask=document.getElementById("inputTask")
let addButton=document.getElementById("addButton")
let taskList=document.getElementById("taskList")


function addTask(){
addButton.addEventListener("click",function(){
   let task= inputTask.value;
  let div= document.createElement("div")
  div.classList.add("divTask");
  div.innerHTML=` <input type="checkbox" id="checkBox">
  <p id="tasktext">${task}</p>
  <button id="removeButton">Remove</button>`
   taskList.appendChild(div);

})
}
addTask()
