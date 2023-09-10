const headre = document.querySelector("header");

window.addEventListener ("scroll", function(){
    headre.classList.loggle ("sticky", this.window.scrolly > 0);
})