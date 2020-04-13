//for a date
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"long", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
///


const input = document.getElementById("input");

var prosze = document.getElementById("one");
prosze.innerHTML = 'start planning';

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        const value = document.getElementById("input").value;
        prosze.innerHTML = value.toString();
    }
});