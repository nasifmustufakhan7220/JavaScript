function formatCountdown(totalSeconds) {
    let hour;
    let minute;
    let seconds;
        hour = Math.floor(totalSeconds / 3600);
        minute = Math.floor((totalSeconds % 3600) / 60);
        seconds = totalSeconds % 60;

        hour = hour.toString().padStart(2,"0");
        minute = minute.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
    return `${hour}:${minute}:${seconds}`;
}

console.log(formatCountdown(59));