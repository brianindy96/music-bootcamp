const nav = document.querySelector(".header");

window.addEventListener("scroll", () =>{
    nav.classList.toggle("sticky", window.scrollY > 0);
})