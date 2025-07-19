//authentication page
let authPage = document.getElementById("authPage");

//signup page
let createdUsername = document.getElementById("createUsername").value.trim();
let createdPassword = document.getElementById("createdPassword").value.trim();
let createAccountButton = document.getElementById("createAccountButton");
let signupCard = document.getElementById("signup");

//signup page ap

//login page

let userForLogin = document.getElementById("username").value.trim();
let passwordForLogin = document.getElementById("password").value.trim();
let LoginButton = document.getElementById("LoginButton");
let loginCard = document.getElementById("login");

//login page disappear at first
loginCard.classList.add("pageDisappear");

function userLogin() {
  // the signup thing is here
  createAccountButton.addEventListener("click", function () {
    //creating object to send the data in the local storage
    // let userobj = {
    //   username: createdUsername,
    //   password: createdPassword,
    // };
    // users.push(userobj);

    // sending the data in local storage by converting it into string
    // localStorage.setItem("user", JSON.stringify(users));

    //displaying a success message that account is created successfully through p tag
    let successMsgContainer = document.getElementById("successMsgContainer");
    let notify = document.createElement("p");
    notify.innerHTML = `<p id="success">✔ Account created successfully</p>`;
    successMsgContainer.appendChild(notify);

    //setting time for how much second the success message appears
    setTimeout(() => {
      notify.remove();
    }, 2000);

    //at last clearing the input field of user name and password
    createdUsername.value = "";

    signupCard.classList.add("pageDisappear");
    loginCard.classList.remove("pageDisappear");

    //after sign up process
    //checking the users username and password  and passing it to the todo app
    // let users = JSON.parse(localStorage.getItem("user"));
    // users.forEach((user, index) => {
    //   let userName = user.username;
    //   let passWord = user.password;

    //   LoginButton.addEventListener("click", function () {
    //     if (userForLogin == userName && passwordForLogin == passWord) {
    //       console.log("hi shiva");
    //     }
    //   });
    // });
  });

    

    

  //login page
}

//create account button
userLogin();

//todo app section is below
//taking reference
let inputText = document.getElementById("inputText");
let addbutton = document.getElementById("addbutton");
let tasklist = document.getElementById("tasklist");

//loading local storage strings into array and showing it
let storage = JSON.parse(localStorage.getItem("tasks")) || [];

storage.forEach(function (taskobj) {
  let click = document.getElementById("mouseclick");

  let taskText = taskobj.text;
  let taskDate = taskobj.date;
  let div = document.createElement("div");
  div.classList = "taskdiv";
  div.innerHTML = ` 
   <div id=left>
   <input type="checkbox"  class="checkbox">
    <p class="inputTask">${taskText}</p>
    </div>
<div id="right">
<p>${taskDate}</p>
    <button class="removeButton">Remove</button>
    </div>`;
  tasklist.appendChild(div);

  //remove button
  let removeButton = div.querySelector(".removeButton");
  removeButton.addEventListener("click", function () {
    click.play();
    div.remove();
    storage = storage.filter(function (task) {
      return !(task.text === taskobj.text && task.date === taskobj.date);
    });
    localStorage.setItem("tasks", JSON.stringify(storage));
  });
  //checking
  let checkbox = div.querySelector(".checkbox");
  let para = div.querySelector(".inputTask");
  checkbox.addEventListener("change", function () {
    para.classList.toggle("line");
  });
});

//add button
addbutton.addEventListener("click", function () {
  let click = document.getElementById("mouseclick");
  click.play();
  let inputValue = inputText.value.trim();
  if (inputValue == "") {
    alert("Please enter your task");
    return;
  }

  //first letter capital
  inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
  //adding date
  let date = new Date();
  let currentTime = date.toLocaleString();
  let div = document.createElement("div");
  div.classList = "taskdiv";
  div.innerHTML = ` 
   <div id=left>
   <input type="checkbox"  class="checkbox">
    <p class="inputTask">${inputValue}</p>
    </div>
<div id="right">
<p>${currentTime}</p>

    <button class="removeButton">Remove</button>
    
    </div>`;
  tasklist.appendChild(div);

  //checking
  let checkbox = div.querySelector(".checkbox");
  let para = div.querySelector(".inputTask");
  checkbox.addEventListener("change", function () {
    para.classList.toggle("line");
  });

  //creating object for local storage
  let taskobj = {
    text: inputValue,
    date: currentTime,
  };
  storage.push(taskobj);
  //sending to local storage
  localStorage.setItem("tasks", JSON.stringify(storage));

  //Remove button feature
  let removeButton = div.querySelector(".removeButton");
  removeButton.addEventListener("click", function () {
    click.play();
    div.remove();
    storage = storage.filter(function (task) {
      return !(task.text === taskobj.text && task.date === taskobj.date);
    });
    localStorage.setItem("tasks", JSON.stringify(storage));
  });

  //clearing input field
  inputText.value = "";
});
