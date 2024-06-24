// Update the clock every second
function updateClock() {
    const clockElement = document.getElementById('showClock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if needed
    const formattedTime = formattedHours + ':' + formattedMinutes + ' ' + ampm;
    clockElement.textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();