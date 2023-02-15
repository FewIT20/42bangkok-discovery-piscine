const btnNew = document.getElementById("btn-new");
btnNew.addEventListener("click", () => {
  event.preventDefault();
  let newToDo = prompt("What you want to do?");
  if (!newToDo) {
    alert("New ToDo must not empty!");
    return;
  }
  addNewToDo(newToDo);
});

let toDoLists = [];

function checkIsCookieExists() {
  if (document.cookie.length) {
    loadCookieData();
  }
}

function loadCookieData() {
  let cookieData = document.cookie.split("=")[1].split("|");

  for (let x = 0; x < cookieData.length; x++) {
    if (!cookieData[x]) {
      continue;
    } else {
      addNewToDo(cookieData[x]);
    }
  }
}

function saveCookieData() {
  var x = toDoLists.join("|");
  document.cookie = `toDoLists=${x};`;
}

function addNewToDo(newToDo) {
  const listContainer = document.getElementById("ft_list");

  const newToDoNode = document.createElement("p");
  newToDoNode.setAttribute("id", toDoLists.length + 1);
  newToDoNode.innerHTML = newToDo;
  newToDoNode.addEventListener("click", () => {
    event.preventDefault();
    const elementIdx = event.target.id;
    const element = document.getElementById(elementIdx);
    const isConfirm = confirm("Delete this To-Do Item from list?");
    if (isConfirm) {
      listContainer.removeChild(element);
      toDoLists[elementIdx - 1] = "";
      saveCookieData();
    }
  });

  if (toDoLists.length) {
    const prevToDoIdx = toDoLists.length;
    const prevToDoDiv = document.getElementById(prevToDoIdx);
    listContainer.insertBefore(newToDoNode, prevToDoDiv);
    toDoLists.push(newToDo);
  } else {
    listContainer.appendChild(newToDoNode);
    toDoLists.push(newToDo);
  }

  saveCookieData();
}

checkIsCookieExists();
