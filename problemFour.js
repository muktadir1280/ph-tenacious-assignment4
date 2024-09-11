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
console.log(calculateFinalScore({ name: "Rajib", testScore: 30, schoolGrade: 50, isFFamily: false })); //remove this line