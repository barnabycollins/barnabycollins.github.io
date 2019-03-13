function displayTime() {
  var time = moment().format('HH:mm:ss');
  $('#time').html(time);
}
function displayDate() {
  var date = moment().format('dddd Do MMMM YYYY');
  $('#date').html(date);
}
// set time initially (setInterval takes a while to run)
displayTime();
displayDate();
// set update interval
setInterval(displayTime, 500);
setInterval(displayDate, 1800);
