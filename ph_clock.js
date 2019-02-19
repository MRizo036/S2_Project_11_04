"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Maria De Jesus Rizo
   Date:  2.14.19

   Filename:   ph_clock.js     

*/






/* ------------------------------------------------- */

/*The lines below create different variables with their own names. The minsLeft variable is given the value of 30. The secsLeft variable is given the value of 0. The tiemLeft variable is then given a value of minsLeft times 60 pluss the value  assigned to secsLeft.  */
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;

/*The line below creates a new variable that is assigned the value of a set interval with the paramethers of the countdown function and 1000. This sets the amount of time that should be between each time the countdown function is run on the browser. In this case, the countdown function will be run every second.*/
var clockID = setInterval("countdown()", 1000);

/* The line below creates a function with the name of countdown that dows not have any parameters. Inside of the function, the minsLeft variable is given the value of timeLeft divide by 60. This is placed within Math.floor which will round the value down to the lowest integer. The secsLeft variable is given the value of timeLeft minus the value of minsLeft times 60.    */
function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - (minsLeft * 60);
    /* Two new variables are created, minsString and secsString. By calling the addLeadingZero function as the value of the variables, a zero is added before single digit numbers on the timer. */
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    /* The line below states that the element with the id of minutes inside of the HTML document will be changed and given the value of the minsString variable. The line below that does the same thing, the only difference being the id being affected and the value it is given.*/
    document.getElementById("minutes").innerHTML = minsString;
    document.getElementById("seconds").innerHTML = secsString;
    /*The line below calls the function checkTimer to be run every time that the countdown function is run.*/
    checkTimer();
    /*States that the value of the timeLeft variable will decrease by one every time the function is run.*/
    timeLeft--;
}

/* The line below creates a function with the name of stop clock. */
function stopClock(){
    /*The line below states that the string provide will be placed within the HTML before the end of the element with an id of TimeHead. Unlike innerHTML, the string will not replace the contents of the html element. */
    document.getElementById("TimeHead").insertAdjacentHTML("beforeend", "<br />(Order Expired)");
    /* This line clears the time interval that was previously defines by the clockID variable using setInterval().*/
    clearInterval(clockID);

}
/* The checkTimer() function tests whether there is any time left to make the ticket order. If the time left is 0, the stopClock() function is run; otherwise nothing happens and the program continues to run. */
function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */
function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}