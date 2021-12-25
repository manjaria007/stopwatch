

// need to define some variables to hold values
let seconds = 0;
let minutes = 0;
let hours = 0;

// define variables that will hold the display values
let displaySec = 0;
let displayMin = 0;
let displayHours = 0;

// variable to hold setInternal function
let interval = null;

// variable to hold stopwatch status
let status = "stop";

// make function to determine when to increment next number
function stopwatch()
{
    seconds++;

    if (seconds / 60 === 1)
    {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1)
        {
            minutes = 0;
            hours++;
        }
    }

    // if seconds, minutes, or hours only have one digit, add a leading 0. otherwise, it would collapse to 0:0:0.
    if (seconds < 10)
    {
        displaySec = "0" + seconds.toString();
    }
    else
    {
        displaySec = seconds;
    }

    if (minutes < 10)
    {
        displayMin = "0" + minutes.toString();
    }
    else
    {
        displayMin = minutes;
    }

    if (hours < 10)
    {
        displayHours = "0" + hours.toString();
    }
    else
    {
        displayHours = hours;
    }

    document.getElementById("watchDisplay").innerHTML = displayHours + ":" + displayMin + ":" + displaySec; // update time
}

// does not start right away because this is a function, will not start upon launch, button onclick calls this
function toggle()
{
    change();
    if (status === "stop")
    {
        // as of right now, it's set to call my function every 1000 millisec, or 1 sec
        // start stopwatch by calling setInteval() function
        // not stored on page literally. will not start as soon as it is launched
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("start").innerHTML = "STOP";
        status = "start";
    }

    else
    {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "START";
        status = "stop";
    }
}

function reset()
{
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("watchDisplay").innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "START";
}

function change()
{
    var x = document.getElementById("watchDisplay");

    if (x.style.color == "blue")
    {
        x.style.color = "red";
    }

    else
    {
        x.style.color = "blue";
    }
}