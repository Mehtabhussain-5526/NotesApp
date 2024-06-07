const storedData = localStorage.getItem("data");
let data = JSON.parse(storedData);
const parentDiv = document.getElementById("mainContent");
const searchBar = document.getElementById("searchBar");
// rendering content.
function rendering() {
  if (data) {
    parentDiv.innerHTML = "";
    for (i = 0; i < data.length; i++) {
      let sTitle = data[i].title;
      let status = data[i].status;
      let div = document.createElement("div");
      div.className = "card";
      div.id = `${data[i].id}`;
      let p1 = document.createElement("p");
      p1.className = "p1";
      p1.textContent = sTitle;
      p1.style = "margin-bottom: 15px;";
      let p2 = document.createElement("p");
      p2.className = "p2";
      p2.textContent = status;
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
      const dateA = a.date;
      const dateB = b.date;
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
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
      let status = searchData[i].status;
      let div = document.createElement("div");
      div.className = "card";
      div.id = `${searchData[i].id}`;
      let p1 = document.createElement("p");
      p1.className = "p1";
      p1.textContent = sTitle;
      p1.style = "margin-bottom: 15px;";
      let p2 = document.createElement("p");
      p2.className = "p2";
      p2.textContent = status;
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
