//taking reference
let inputText = document.getElementById("inputText")
let addbutton = document.getElementById("addbutton")
let tasklist = document.getElementById("tasklist")

//loading local storage strings into array and showing it
let storage = JSON.parse(localStorage.getItem("tasks")) ||[];

storage.forEach(function (taskobj) {
    let taskText = taskobj.text;
    let taskDate = taskobj.date;
    let div = document.createElement("div")
    div.classList = "taskdiv"
    div.innerHTML = ` 
   <div id=left>
   <input type="checkbox"  class="checkbox">
    <p class="inputTask">${taskText}</p>
    </div>
<div id="right">
<p>${taskDate}</p>
    <button class="removeButton">Remove</button>
    </div>`
    tasklist.appendChild(div);

    //remove button 
     let removeButton = div.querySelector(".removeButton");
    removeButton.addEventListener("click", function () {
        div.remove();
    });
      //checking
   let checkbox= div.querySelector(".checkbox")
   let para=div.querySelector(".inputTask");
   checkbox.addEventListener("change",function(){
   para.classList.toggle("line")
   })
;

})

//add button
addbutton.addEventListener("click", function () {
    let inputValue = inputText.value.trim()

     //first letter capital
    inputValue=inputValue.charAt(0).toUpperCase()+inputValue.slice(1)
//adding date
    let date = new Date();
    let currentTime = date.toLocaleString()
    let div = document.createElement("div")
    div.classList = "taskdiv"
    div.innerHTML = ` 
   <div id=left>
   <input type="checkbox"  class="checkbox">
    <p class="inputTask">${inputValue}</p>
    </div>
<div id="right">
<p>${currentTime}</p>

    <button class="removeButton">Remove</button>
    
    </div>`
    tasklist.appendChild(div);

    //checking
   let checkbox= div.querySelector(".checkbox")
   let para=div.querySelector(".inputTask");
   checkbox.addEventListener("change",function(){
   para.classList.toggle("line")
   })

    //creating object for local storage
    let taskobj = {
        text: inputValue,
        date: currentTime
    }
    storage.push(taskobj)
    //sending to local storage
    localStorage.setItem("tasks", JSON.stringify(storage));

    //Remove button feature
    let removeButton = div.querySelector(".removeButton")
    removeButton.addEventListener("click", function () {
        div.remove();
    });

    //clearing input field
    inputText.value = "";

})

