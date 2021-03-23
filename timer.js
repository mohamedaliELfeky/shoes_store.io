var countDownDate = new Date(2022, 2, 24, -1, 29).getTime();

timeScaleList = ['days', 'hours', 'minutes', 'seconds'];
var counter = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    timeScale = {
        days: distance / (1000 * 60 * 60 * 24),
        hours: (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        minutes: (distance % (1000 * 60 * 60)) / (1000 * 60),
        seconds: (distance % (1000 * 60)) / 1000
    };
    for (var value of timeScaleList.values()) {

        document.getElementById(value).innerHTML = Math.floor(timeScale[value]);
        console.log(timeScale[value] + '  ' + value + "  " + distance);
    }
    if (distance < 0) {
        clearInterval(counter);
        document.getElementById('status').innerHTML = "EXPIRED";
        document.getElementById('status').style.color = 'red';
    }

}, 1000);