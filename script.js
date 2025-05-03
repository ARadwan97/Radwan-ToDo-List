// Clock Functionality
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const dateString = now.toISOString().split('T')[0];
    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('day').textContent = dayString;
}

// Progress Circle Animation
function updateProgressCircle() {
    const now = new Date();
    const seconds = now.getSeconds();
    const progress = document.querySelector('.progress');
    const offset = 283 - (seconds / 60) * 283;
    progress.style.strokeDashoffset = offset;
}

// Update Clock and Circle every second
setInterval(() => {
    updateClock();
    updateProgressCircle();
}, 1000);

// Initialize Clock on Load
updateClock();
updateProgressCircle();
