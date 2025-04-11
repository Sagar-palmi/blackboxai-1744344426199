// DOM Elements
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const timezoneElement = document.getElementById('timezone');

// Options for date formatting
const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};

const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};

// Function to update time
function updateDateTime() {
    try {
        const now = new Date();
        
        // Update time
        timeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
        
        // Update date
        dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
        
        // Update timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        timezoneElement.textContent = timezone.replace('_', ' ');
    } catch (error) {
        console.error('Error updating date/time:', error);
        timeElement.textContent = '--:--:--';
        dateElement.textContent = 'Error loading date';
        timezoneElement.textContent = 'Timezone unavailable';
    }
}

// Update immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

// Add smooth fade-in animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
});
