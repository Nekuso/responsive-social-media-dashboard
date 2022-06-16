const darkbtn = document.querySelector(".slider");
const bodypage = document.querySelector(".page");

darkbtn.onclick = () => {
    bodypage.classList.toggle("dark__mode");
}