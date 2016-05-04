var MinToggle = document.querySelector(".min-toggle");
var MaxToggle = document.querySelector(".max-toggle");

function minus(id) {
    var people = document.getElementById(id);
    people.value--;
}

function plus(id) {
    var people = document.getElementById(id);
    people.value++;
}

MinToggle.addEventListener('mousedown', function(){
    MinToggle.classList.add("toggle-active");
});
MinToggle.addEventListener('mouseup', function(){
    MinToggle.classList.remove("toggle-active");
});
 
MaxToggle.addEventListener('mousedown', function(){
    MaxToggle.classList.add("toggle-active");
});
MaxToggle.addEventListener('mouseup', function(){
    MaxToggle.classList.remove("toggle-active");
});

