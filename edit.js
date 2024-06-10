const title = document.getElementById("title");
const discription = document.getElementById("discription");
const pageOneData = new URLSearchParams(window.location.search);
const fetchedID = pageOneData.get("id");
const dataAvail = localStorage.getItem("data");
const displayData = JSON.parse(dataAvail);
let theStatus;
// Existing Title.
if (!displayData) {
  let newData = [];
  localStorage.setItem("data", JSON.stringify(newData));
}
// Finding Index to Make new Changes.
let editIndex;
if (fetchedID) {
  let toShowID = displayData.findIndex((x) => x.id == fetchedID);
  editIndex = toShowID;
  title.value = displayData[toShowID].title;
  discription.value = displayData[toShowID].discription;
}
let olddate;
if (fetchedID) {
  olddate = displayData[editIndex].date;
}
console.log(olddate);
// Updation
function dataUpdating() {
  let date = Date.now();
  let instance = {
    id: Math.random(),
    title: title.value,
    discription: discription.value,
    date: olddate,
    status: theStatus,
    update: date,
  };
  displayData.splice(editIndex, 1, instance);
  localStorage.setItem("data", JSON.stringify(displayData));
}

// Local Storage Setup
function dataStoring() {
  let data = localStorage.getItem("data");
  let dataParse = JSON.parse(data);
  let date = Date.now();
  let instance = {
    id: Math.random(),
    title: title.value,
    discription: discription.value,
    date: date,
    status: theStatus,
    update: 0,
  };
  dataParse.push(instance);
  localStorage.setItem("data", JSON.stringify(dataParse));
}
document.getElementById("addNote").addEventListener("click", (e) => {
  if (editIndex == 0 || editIndex) {
    dataUpdating();
  } else {
    dataStoring();
  }
});

// delete BTN listener
document.getElementById("removeNote").addEventListener("click", (e) => {
  if (fetchedID) {
    displayData.splice(editIndex, 1);
    localStorage.setItem("data", JSON.stringify(displayData));
  }
});

//add btn to update btn
if (editIndex == 0 || editIndex) {
  const updateBtnColor = document.getElementById("btn-addNote");
  updateBtnColor.innerHTML = "Update Note";
  updateBtnColor.style.color = "Black";
  updateBtnColor.style.background = "lightgreen";
}
//home Listener
document.getElementById("home-li").addEventListener("click", (e) => {
  window.location.href = "index.html";
});

// Date && time Setup
let dateEx;
let updateInform;
if (!fetchedID) {
  dateEx = Date.now();

} else {
  dateEx = displayData[editIndex].date;
  updateInform = displayData[editIndex].update;
}

if (updateInform != 0) {
  let dateCurrent = Date.now();
  let miliseconds = dateCurrent - updateInform;
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(days / 30);
  let years = Math.floor(days / 365);
  if (seconds >= 0 && seconds < 60) {
    theStatus = "Edited a few seconds ago";
  } else if (seconds > 60 && minutes < 60) {
    theStatus = "Edited " + minutes + " minutes ago";
  } else if (minutes > 60 && hours < 24) {
    theStatus = "Edited " + hours + " hours ago";
  } else if (hours > 24 && days < 30) {
    theStatus = "Edited " + days + " days ago";
  } else if (days > 30 && months < 12) {
    theStatus = "Edited " + months + " months ago";
  } else if (months > 12) {
    theStatus = "Edited " + years + " years ago";
  }
} else {
  let dateCurrent = Date.now();
  let miliseconds = dateCurrent - dateEx;
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30);
  let years = Math.floor(days / 365);
  if (seconds >= 0 && seconds < 60) {
    theStatus = "Created a few seconds ago";
  } else if (seconds > 60 && minutes < 60) {
    theStatus = "Created " + minutes + " minutes ago";
  } else if (minutes > 60 && hours < 24) {
    theStatus = "Created " + hours + " hours ago";
  } else if (hours > 24 && days < 30) {
    theStatus == "Created " + days + " days ago";
  } else if (days > 30 && months < 12) {
    theStatus = "Created " + months + " months ago";
  } else if (months > 12) {
    theStatus = "Created " + years + " years ago";
  }
}
if (fetchedID) {
  document.getElementById("edited-status").innerText = theStatus;
}