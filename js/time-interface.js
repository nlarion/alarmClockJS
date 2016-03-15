$(document).ready(function(){
  $('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
  runTime();
});

var runTime = function(){
  setTimeout(function () {
      $('#time').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
      runTime();
      var globalTime = moment().format('h:mm');
      var alarms = $(".singleAlarm");
      console.log(alarms);
      for (var i = 0; i < alarms.length; i++) {
        var singleAlarmTime = $(alarms[i]).attr("time");
        if(globalTime >= singleAlarmTime){
          $(alarms[i]).html(singleAlarmTime+" WAKE UP!");

        }
      }
    }, 1000);
}

$(document).ready(function(){
  $('#alarmTime').submit(function(event){
    event.preventDefault();
    var userTime = $('#alarm').val();
    $(".userAlarm").prepend("<div class='singleAlarm' time="+userTime+">Alarm Set For: "+userTime+"</div>");

  });
});
