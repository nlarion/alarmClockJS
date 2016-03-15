$(document).ready(function(){
  $('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  runTime();
});

var runTime = function(){
  setTimeout(function () {
      $('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
      runTime();
    }, 1000);
}
