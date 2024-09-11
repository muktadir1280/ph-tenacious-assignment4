function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let finalScore = (obj.testScore) + (obj.schoolGrade);

    if (obj.isFFamily) {
        finalScore = finalScore + 20;

    }
    if (finalScore > 80) {
        return true;
    }
    if (finalScore < 80) {
        return false;
    }
}
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); //remove this line