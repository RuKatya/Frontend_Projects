const navBar: HTMLElement = document.querySelector('.navBar')
const hanburgerBtn: HTMLElement = document.querySelector('.hanburgerBtn')

function hendleOpenNavBtn() {
    navBar.style.display = "flex"
    hanburgerBtn.style.display = "none"
}

function hendleCloseNavBtn() {
    navBar.style.display = "none"
    hanburgerBtn.style.display = "block"
}