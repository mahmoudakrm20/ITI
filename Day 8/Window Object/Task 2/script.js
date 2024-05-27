var clockInterval;

function updateClock() {
    var dateNow = new Date();
    var timeNow = dateNow.toLocaleTimeString();
    document.getElementById('clock').textContent = timeNow;
}


document.getElementById('startClockBtn').addEventListener('click' , function() {
    alert('Clock Started');
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
    document.getElementById('startClockBtn').style.display = 'none';
}) ;

function stopClock() {
    if (clockInterval) {
        clearInterval(clockInterval);
        alert('Clock Stopped');
    }
}

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'w') {
        stopClock();
    }
});