// typing animation script 
var typed = new Typed(".animate", {
    strings: ["Learn!", "Grow!", "Create!"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// modal 
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function() {
    myInput.focus();
});