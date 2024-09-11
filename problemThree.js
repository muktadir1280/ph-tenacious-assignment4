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
console.log(checkDigitsInName(["Raj"])); //remove this line