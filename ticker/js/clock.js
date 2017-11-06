function displayTime() {
  var time = moment().format('HH:mm:ss');
  $('#time').html(time);
  setTimeout(displayTime, 500);
}
function displayDate() {
  var date = moment().format('dddd Do MMMM YYYY');
  $('#date').html(date);
  setTimeout(DisplayDate, 1800);
}
displayTime();
displayDate();
