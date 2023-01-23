//1. Show the current day at the top
//Use moment api and format today date
//Add it to the 'currentDay' element

var todayDate = moment();
$("#currentDay").text(todayDate.format('dddd, MMMM Do'));