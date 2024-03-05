//Change the button icon when clicking on it: as seen on a Stack Overflow tutorial and an Youtube tutorial - Web Dev Creative 
// haven't found a way to fix the errors regarding the Google calendar - @import rule + third party

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i') 
const dropDownMenu = document.querySelector('.dropdown_menu') 

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen= dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen


// The .classList property returns the CSS classnames of an element. ? is a ternary/conditional operator:

    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}