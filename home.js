const storedData = localStorage.getItem("data");
let data = JSON.parse(storedData);
const parentDiv = document.getElementById("mainContent");
const searchBar = document.getElementById("searchBar");
// rendering content.
function rendering() {
  if (data) {
    parentDiv.innerHTML = "";
    for (i = 0; i < data.length; i++) {
      let theStatus;
      let sTitle = data[i].title;
      let updateinfo = data[i].update;
      let dateEx = data[i].date;
      if (updateinfo) {
        let subStatus;
        let dateCurrent = Date.now();
        let miliseconds = dateCurrent - dateEx;
        let seconds = Math.floor(miliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30);
        let years = Math.floor(days / 365);
        if (seconds >= 0 && seconds < 60) {
          subStatus = "Last Edited: A few seconds ago";
        } else if (seconds > 60 && minutes < 60) {
          subStatus = "Last Edited: " + minutes + " minutes ago";
        } else if (minutes > 60 && hours < 24) {
          subStatus = "Last Edited: " + hours + " hours ago";
        } else if (hours > 24 && days < 30) {
          subStatus = "Last Edited: " + days + " days ago";
        } else if (days > 7 && days < 29) {
          subStatus = "Last Edited: " + weeks + " days ago";
        } else if (days > 30 && months < 12) {
          subStatus = "Last Edited: " + months + " months ago";
        } else if (months > 12) {
          subStatus = "Last Edited: " + years + " years ago";
        }
        theStatus = subStatus;
      } else {
        let subStatus2;
        let dateCurrent = Date.now();
        let miliseconds = dateCurrent - dateEx;
        let seconds = Math.floor(miliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30);
        let years = Math.floor(days / 365);
        if (seconds >= 0 && seconds < 60) {
          subStatus2 = "Created: A few seconds ago";
        } else if (seconds > 60 && minutes < 60) {
          subStatus2 = "Created: " + minutes + " minutes ago";
        } else if (minutes > 60 && hours < 24) {
          subStatus2 = "Created: " + hours + " hours ago";
        } else if (hours > 24 && days < 30) {
          subStatus2 = "Created: " + days + " days ago";
        } else if (days > 7 && days < 29) {
          subStatus2 = "Created: " + weeks + " days ago";
        } else if (days > 30 && months < 12) {
          subStatus2 = "Created: " + months + " months ago";
        } else if (months > 12) {
          subStatus2 = "Created: " + years + " years ago";
        }
        theStatus = subStatus2;
      }
      let div = document.createElement("div");
      div.className = "card";
      div.id = `${data[i].id}`;
      let p1 = document.createElement("p");
      p1.className = "p1";
      p1.textContent = sTitle;
      p1.style = "margin-bottom: 15px;";
      let p2 = document.createElement("p");
      p2.className = "p2";
      p2.textContent = theStatus;
      div.append(p1, p2);
      parentDiv.appendChild(div);
      let childDiv = document.getElementById(`${data[i].id}`);
      childDiv.addEventListener("click", (e) => {
        let triggerID = e.target.id;
        window.location.href = `./edit.html?id=${triggerID}`;
      });
    }
  }
}
rendering();

// Sorter
document.getElementById("select").addEventListener("change", (e) => {
  if (e.target.value == "Sort by recently created") {
    data = data.reverse();
  }
  if (e.target.value == "Sort by alphabetically") {
    data.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
  }
  if (e.target.value == "Sort by last edited") {
    data.sort((a, b) => {
      const updateA = a.update;
      const updateB = b.update;
      if (updateA > updateB) {
        return -1;
      }
      if (updateA < updateB) {
        return 1;
      }
      return 0;
    });
  }
  rendering();
});

// Searching function
function searching() {
  let searchInput = searchBar.value;
  let searchData = data.filter((x) =>
    x.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  // Search renderer
  if (searchData) {
    parentDiv.innerHTML = "";
    for (i = 0; i < searchData.length; i++) {
      let sTitle = searchData[i].title;
      let statusToShow;
      let statusSearched = searchData[i].update;
      let dateEx = searchData[i].date;
      if (statusSearched) {
        let subStatus;
        let dateCurrent = Date.now();
        let miliseconds = dateCurrent - dateEx;
        let seconds = Math.floor(miliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30);
        let years = Math.floor(days / 365);
        if (seconds >= 0 && seconds < 60) {
          subStatus = "Last Edited: A few seconds ago";
        } else if (seconds > 60 && minutes < 60) {
          subStatus = "Last Edited: " + minutes + " minutes ago";
        } else if (minutes > 60 && hours < 24) {
          subStatus = "Last Edited: " + hours + " hours ago";
        } else if (hours > 24 && days < 30) {
          subStatus = "Last Edited: " + days + " days ago";
        } else if (days > 7 && days < 29) {
          subStatus = "Last Edited: " + weeks + " days ago";
        } else if (days > 30 && months < 12) {
          subStatus = "Last Edited: " + months + " months ago";
        } else if (months > 12) {
          subStatus = "Last Edited: " + years + " years ago";
        }
        statusToShow = subStatus;
      } else {
        let subStatus2;
        let dateCurrent = Date.now();
        let miliseconds = dateCurrent - dateEx;
        let seconds = Math.floor(miliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30);
        let years = Math.floor(days / 365);
        if (seconds >= 0 && seconds < 60) {
          subStatus2 = "Created: A few seconds ago";
        } else if (seconds > 60 && minutes < 60) {
          subStatus2 = "Created: " + minutes + " minutes ago";
        } else if (minutes > 60 && hours < 24) {
          subStatus2 = "Created: " + hours + " hours ago";
        } else if (hours > 24 && days < 30) {
          subStatus2 = "Created: " + days + " days ago";
        } else if (days > 7 && days < 29) {
          subStatus2 = "Created: " + weeks + " days ago";
        } else if (days > 30 && months < 12) {
          subStatus2 = "Created: " + months + " months ago";
        } else if (months > 12) {
          subStatus2 = "Created: " + years + " years ago";
        }
        statusToShow = subStatus2;
      }
      let div = document.createElement("div");
      div.className = "card";
      div.id = `${searchData[i].id}`;
      let p1 = document.createElement("p");
      p1.className = "p1";
      p1.textContent = sTitle;
      p1.style = "margin-bottom: 15px;";
      let p2 = document.createElement("p");
      p2.className = "p2";
      p2.textContent = statusToShow;
      div.append(p1, p2);
      parentDiv.appendChild(div);
      let childDiv = document.getElementById(`${searchData[i].id}`);
      childDiv.addEventListener("click", (e) => {
        let triggerID = e.target.id;
        window.location.href = `./edit.html?id=${triggerID}`;
      });
    }
  }
}
// Searching listener
searchBar.addEventListener("input", (e) => {
  searching();
});
