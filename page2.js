function showControlsDropdown() {
  document.getElementById("controls-dropdown").classList.toggle("show");
}

function showScheduleDropdown() {
    document.getElementById("schedule-dropdown").classList.toggle("show");
  }
  

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".button-heading-text") &&
    !event.target.matches(".button-heading-img")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
