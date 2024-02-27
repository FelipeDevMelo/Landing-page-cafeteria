const sideBar = document.querySelector(".sidebar");
const dropDownMenu = document.querySelector(".dropdown-menu");
const closeButton = document.querySelector(".sidebar_close");

dropDownMenu.addEventListener("click", (event) => {
	event.preventDefault();
	sideBar.style.display = "flex";
});

closeButton.addEventListener("click", (event) => {
	event.preventDefault();
	sideBar.style.display = "none";
});
