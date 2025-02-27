function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const secondDegrees = (seconds / 60) * 360;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();