const showTime = document.querySelector(".timer");
const input = document.querySelector(".input");

input.addEventListener('keyup', e => showTime.textContent = `${Math.floor(e.target.value)} : ${String(e.target.value*60 % 60).padStart(2, '0')}`)

function startCounter() {
    let startFrom = input.value * 60;

    const updateTimer = () => {
        startFrom--;
        
        const minutes = Math.floor(startFrom / 60);
        const seconds = startFrom % 60;
        
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        
        const timeFormat = `${formattedMinutes} : ${formattedSeconds}`;
        showTime.textContent = timeFormat;
                
        if (startFrom <= 0) {
            clearInterval(timerInterval);
        }
    };
    updateTimer();
    
    const timerInterval = setInterval(updateTimer, 1000);
}