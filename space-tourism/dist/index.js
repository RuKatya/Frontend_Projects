var navBar = document.querySelector('.navBar');
var hanburgerBtn = document.querySelector('.hanburgerBtn');
function hendleOpenNavBtn() {
    navBar.style.display = "flex";
    hanburgerBtn.style.display = "none";
}
function hendleCloseNavBtn() {
    navBar.style.display = "none";
    hanburgerBtn.style.display = "block";
}
