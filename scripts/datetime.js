// -----------  Date Time Generator ------------- 

// the function below will be called every 1 Second with the setInterval 
// function at the bottom of the page
function time() {
    // Declare javascript pointers to the date time elements in index.HTML
    var dateSpan = document.getElementById("date-span");
    var timehhmm = document.getElementById("hhmm");
    var timess = document.getElementById("ss");
    var timeampm = document.getElementById("ampm");

    var d = new Date(); // declare a new date object

    // Generate the Date in the format: "{WEEKDAY} {MMM DD, 2020}"
    var optionWeekdayOnly = { weekday: "long" };
    var optionDateOnly = { year: "numeric", month: "long", day: "numeric" };
    var weekdayOnly = d.toLocaleDateString("en-US", optionWeekdayOnly);
    var dateOnly = d.toLocaleDateString("en-US", optionDateOnly);

    // d.toLocaleString() generates a string as:
    // "M/D/YYYY, H:MM:SS AM" OR "M/D/YYYY, HH:MM:SS AM"
    // the code below handles the difference in return between H and HH by slicing the string based on string length

    var dL = d.toLocaleString().length;
    if (dL == 21) {
        var timeOnly = d.toLocaleString().slice(dL - 11, dL - 6);
        var secondsOnly = d.toLocaleString().slice(dL - 5, dL - 3);
        var ampmOnly = d.toLocaleString().slice(dL - 2);
    } else {
        var timeOnly = d.toLocaleString().slice(dL - 10, dL - 6);
        var secondsOnly = d.toLocaleString().slice(dL - 5, dL - 3);
        var ampmOnly = d.toLocaleString().slice(dL - 2);
    }

    /* 
    assigns the date time string variables created in the lines above to the 
    javascript element reference pointers declared at the top of the script
    */
    dateSpan.textContent = weekdayOnly + " " + dateOnly;
    timehhmm.textContent = timeOnly;
    // timess.textContent = secondsOnly; //uncomment this line to have the seconds appear in the page
    timeampm.textContent = ampmOnly.toUpperCase();
}

setInterval(time, 1000); // calls the time function declared above at every 1 second interval
