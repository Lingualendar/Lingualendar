// Time ticking Seconds, formatted like: 09:01:04
window.onload = function tickingSeconds() {

	  // Repeat after 1 second
    var milliRepeat = setTimeout(tickingSeconds, 1000);

	  // Date object and variables 
    var milliTime = new Date();      
	  var currentHour = milliTime.getHours()
   	var currentMinute = milliTime.getMinutes();
   	var currentSecond = milliTime.getSeconds();

	  // Formatting minutes like: 12:05, not like: 12:5
	if (currentMinute < 10) {
            currentMinute = "0" + currentMinute;
    };

	// Formatting seconds like: 12:05:03, not like: 12:05:3
	if (currentSecond < 10) {	
            currentSecond = "0" + currentSecond;
    };
  
  	// Formatting hours like: 09:05:03, not like: 9:05:03
	if (currentHour < 10) {	
            currentHour = "0" + currentHour;
    };
	
     var tickingSecond = 	
         currentHour + ":" + currentMinute + ":" + currentSecond;

	// DIV to display ticking time
    document.getElementById('ticking-seconds').textContent = tickingSecond;
}
