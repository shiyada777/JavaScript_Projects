//calling all the variables
let container = document.getElementById("container");
let inputBox = document.getElementById("inputBox");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

//add button function
addBtn.addEventListener("click", function () {

    //empty value
    if(inputBox.value==""){return null}
        
    
  let inputValue = inputBox.value;
  let taskDiv = document.createElement("div");

  //date thing
  let date = new Date();
  let currentDate = date.toLocaleString();
  taskDiv.innerHTML = ` <div id="task">
       
         <div id="taskLeft"> <div><input type="checkbox" name="check" id="checkBox"></div>
        <div><p id="text">${inputValue}</p></div> </div>
    <div id="taskRight">
    <div>${currentDate}</div>
    <div><button id="edit">Edit</button></div>
        <div><button id="delete">Delete</button></div></div>
        
    </div>`;

  taskList.append(taskDiv);
  inputBox.value = "";

  //checklist
  let text = taskDiv.querySelector("#text");
  let checkBox = taskDiv.querySelector("#checkBox");
  checkBox.addEventListener("change", function () {
    text.classList.toggle("done");
  });

  //delete button
  let deletebtn = taskDiv.querySelector("#delete");
  deletebtn.addEventListener("click", function () {
    taskDiv.remove();
  });

  //edit button
});
