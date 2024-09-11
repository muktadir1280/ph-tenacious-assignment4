function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0 || expenses > income) {
        return "Invalid Input";
    }
    const diff = (income - expenses);
    const tax = (diff * .20);
    return tax;
}

function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email"
    }
    const check = email.split('@');
    const userName = check[0];
    const domainName = check[1];
    return userName + ' sent you an email from ' + domainName;
}

function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    for (let i = 0; i <= name.length; i++) {
        if (!isNaN(name[i])) {
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let finalScore = (obj.testScore) + (obj.schoolGrade);
    if (obj.isFFamily) {
        finalScore = finalScore + 20;
    }
    if (finalScore >= 80) {
        return true;
    }
    if (finalScore <= 80) {
        return false;
    }
}

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