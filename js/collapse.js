const collapsebtn = document.querySelector(".collapse")
const navbar = document.querySelector(".collapsednavitems")

collapsebtn.addEventListener("click", () => {
    collapsebtn.classList.toggle("active")
    navbar.classList.toggle("active")
});