//for a date
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"long", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
///


const input = document.getElementById("input");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

var tasks = [];
tasks.push(one);
tasks.push(two);
tasks.push(three);
tasks.push(four);
tasks.push(five);
tasks.push(six);
tasks.push(seven);
tasks.push(eight);
tasks.push(nine);

one.innerHTML = 'start planning';

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        const value = document.getElementById("input").value;
        one.innerHTML = value.toString();
        alert(tasks.length);
    }
});