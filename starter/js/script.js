//1. Show the current day at the top
//Use moment api and format today date
//Add it to the 'currentDay' element


var todayDate = moment();
$("#currentDay").text(todayDate.format('dddd, MMMM Do'));

//2. Color code each block based on the current time
//Create variables to target each time block

var timeblocks = $('.timeblock');
// In the html add the data-hour which represent which hour each element is 
//Create variable for moment().format('H')(0-23) e.g thisHour

var thisHour = moment().format('H');
//console.log(thisHour)

timeblocks.each(function() {
    var hour = $(this).attr('data-hour');
    //Note the 'hour'and 'thisHour' should be an integer, to make sure it, is
    //you can do something like
    hour = parseInt(hour, 10)
    thisHour = parseInt(thisHour, 10)
    if (hour < thisHour) {
        $(this).addClass("past")
    } else if (hour == thisHour) {
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    }
 })

 //listen to click event on save button
 $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".day-planner").val();
    

    //storing text for that event on local storage
    localStorage.setItem(time, plan)

 })

 
 //Create variable(an array) called inputs that will store all of the input data
//  let key = prompt("Enter key you want tos et")
//  let value = prompt("enter value you want set")
//  localStorage.setItem(key, value)
//  console.log(`The value at ${key} is  ${localStorage.getItem(value)}`)
