$(document).ready(function() {
    var now = new Date();
    var once  = new Date(now.getFullYear() + 1, 0, 1);
    var time = once.getTime() / 1000 - now.getTime() / 1000;
    $('.new-year-clock').FlipClock(time, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
