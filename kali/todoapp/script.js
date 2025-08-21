//calling all the variables
let container=document.getElementById("container");
let inputBox=document.getElementById("inputBox");
let addBtn=document.getElementById("addBtn");
let taskList=document.getElementById("taskList");


//add button function
addBtn.addEventListener("click",function(){
   let inputValue= inputBox.value;
   let taskDiv=document.createElement("div")
   taskDiv.innerHTML=` <div id="task">
       
         <div id="taskLeft"> <div><input type="checkbox" name="check" id="checkBox"></div>
        <div><p id="text">${inputValue}</p></div> </div>
    <div id="taskRight"><div><button id="edit">Edit</button></div>
        <div><button id="delete">Delete</button></div></div>
        
    </div>`
   taskList.append(taskDiv)
   inputBox.value=""
});