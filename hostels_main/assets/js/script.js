const modal_burger = document.getElementById('modal_burger')
const open_burger = document.getElementById('open_burger');
const close_burger = document.getElementById('burger_close');


open_burger.onclick = function(){
    modal_burger.style.display = "block";
    open_burger.style.display = "hide";
}
close_burger.onclick = function() {
    modal_burger.style.display = "none";   
    open_burger.style.display = "show";
}
modal_burger.onclick = function(event) {
    if (event.target === modal_burger) {
        close_burger.onclick();
    }
}
