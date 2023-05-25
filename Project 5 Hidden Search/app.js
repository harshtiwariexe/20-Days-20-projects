const searchBox = document.getElementById("search-box");
const icon = document.getElementById("btn");

icon.onclick = function () {
  searchBox.classList.toggle("active");
};
