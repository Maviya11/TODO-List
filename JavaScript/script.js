let newHr;
let newDiv;
let srDiv;
let todoDiv;
let dateDiv;
let deleteButton;
let newDate;
let newTodo;

let todo = JSON.parse(localStorage.getItem("Todos")) || [];
let date = JSON.parse(localStorage.getItem("Dates")) || [];

function getTodoAndDate() {

  /** Takes TODO input */
  newTodo = document.querySelector(".enter-todo").value;
  newDate = document.querySelector(".select-date").value;

  if (newTodo !== "") {
    if (newDate === "") {
      newDate = "-"
    }
    todo.push(newTodo);
    date.push(newDate);

     /*--- Store todo And its date in browser's local storage ---*/
    localStorage.setItem(`Todos`,JSON.stringify(todo));
    localStorage.setItem(`Dates`,JSON.stringify(date));
    appendNewRow();
  }
}


/*--- Delete button functionality ---*/
function deleteTodo(index) {
  todo.splice(index,1);
  date.splice(index,1);
  localStorage.setItem(`Todos`,JSON.stringify(todo));
  localStorage.setItem(`Dates`,JSON.stringify(date));
  appendNewRow();
}


/*--- Append's <hr> and <div> for new TODO's ---*/
function appendNewRow() {

  /*--- Get's todo and its date from the browser's local storage ---*/
  let exTodo = JSON.parse(localStorage.getItem("Todos"));
  let exDate = JSON.parse(localStorage.getItem("Dates"));
  
  // console.log(exTodo);
  // console.log(exDate);

  let list = document.querySelector("#increasing-list"); //Select Parent
  list.innerHTML = "";

  for (let i = 0; i <exTodo.length; i++){

    let newText = exTodo[i];
    let newnumber = exDate[i];
    

    newHr = document.createElement("hr"); //Create <hr>
    newDiv = document.createElement("div"); //Create Main <div>
    srDiv = document.createElement("div"); //Create Sr. <div>
    todoDiv = document.createElement("div"); //Create Todo <div>
    dateDiv = document.createElement("div"); //Create Date <div>
    deleteButton = document.createElement("button"); //Create delete <button>


    list.append(newHr);
    newHr.setAttribute("class", "hr");

    list.append(newDiv);
    newDiv.setAttribute("id", "todos-heading");
    newDiv.setAttribute("class", "todos-heading");

    /*--- Append  minor elements ---*/
    newDiv.append(srDiv);
    srDiv.setAttribute("class", "sr-no");
    srDiv.innerText = i + 1;
      
    newDiv.append(todoDiv);
    todoDiv.setAttribute("class", "actual-todo");
    todoDiv.innerText = newText;

    newDiv.append(dateDiv);
    dateDiv.setAttribute("class", "todo-date");
    dateDiv.innerText = newnumber;


    newDiv.append(deleteButton);
    deleteButton.innerText = "Delete" 
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("onclick", `deleteTodo(${i})`);
  }
}

/*--- Clears the input field after adding a new TODO ---*/
function clearInput() {
  document.querySelector(".enter-todo").value = "";
}


setInterval(appendNewRow(), 1000);
