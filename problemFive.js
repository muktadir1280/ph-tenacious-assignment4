function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    let sum = 0;
    for (let num of waitingTimes) {
        sum = num + sum;
    }
    let avgTime = sum / waitingTimes.length;
    avgTime = Math.round(avgTime);
    let IsratSerialNumber = (serialNumber - 1);
    let remainingPeople = (IsratSerialNumber - waitingTimes.length);
    let IsratWaitingTime = remainingPeople * avgTime;
    return IsratWaitingTime;
}
console.log(waitingTime([7, 8, 3, 4, 5], "9"));