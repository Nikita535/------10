function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML= t.hours < 10 ? '0'+t.hours : t.hours;
      minutesSpan.innerHTML= t.minutes < 10 ? '0'+t.minutes : t.minutes;
      secondsSpan.innerHTML= t.seconds < 10 ? '0'+t.seconds : t.seconds;
    }
   
    updateClock();
    setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 36 * 24 * 60 * 60 * 1000); //окончательное время
  initializeClock('countdown', deadline);