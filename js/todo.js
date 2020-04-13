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

/*
six.style.textDecoration = "line-through";
six.style.color = "gray";
document.getElementById("b1").style.visibility = "hidden";
document.getElementById("two").style.color = "whitesmoke";


 */
//all white
for (i=0; i<tasks.length; i++)
{

    tasks[i].style.color = "whitesmoke";
}


input.addEventListener("keyup", function(event) {

    if (event.keyCode === 13) {
        const value = document.getElementById("input").value;
        var i;
        for (i=0; i<tasks.length; i++) {
            if (value) {
                if (tasks[i].innerHTML === "-")
                {

                    tasks[i].innerHTML = value.toString();
                    tasks[i].style.color = "#355268";

                    break;
                }
            }
        }
    }
}
);

//when clicked to check
function reply(id){

    {     var  id1  = id -1;
        if (tasks[id1].innerHTML !== "-") {

            tasks[id1].style.textDecoration = "line-through";
            tasks[id1].style.color = "gray";
            document.getElementById(id).style.visibility = "hidden";
        }
    }
};

