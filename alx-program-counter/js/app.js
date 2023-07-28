const countDown = () => {
    const futureDate = new Date("July 17, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const timeLeft = futureDate - nowDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(timeLeft / day);
    const hours = Math.floor((timeLeft % day) / hour);
    const minutes = Math.floor((timeLeft % hour) / minute);
    const seconds = Math.floor((timeLeft % minute) / second);

    document.querySelector(".day").innerText = days > 0 ? days: 0;
    document.querySelector(".hour").innerText = hours > 0 ? hours: 0;
    document.querySelector(".minute").innerText = minutes > 0 ? minutes: 0;
    document.querySelector(".second").innerText = seconds > 0 ? seconds: 0;

}

setInterval(countDown, 500);