// Clock Functionality
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB');
    const dateString = now.toISOString().split('T')[0];
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Progress Circle Animation
function updateProgressCircle() {
    const now = new Date();
    const seconds = now.getSeconds();
    const progress = document.querySelector('.progress');
    const offset = 283 - (seconds / 60) * 283;
    progress.style.strokeDashoffset = offset;
}

// Task Completion
document.querySelectorAll('.mark-complete').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('li').style.opacity = 0.5;
        button.disabled = true;
    });
});

// Update Clock and Circle every second
setInterval(() => {
    updateClock();
    updateProgressCircle();
}, 1000);

// Initialize Clock on Load
updateClock();
updateProgressCircle();
