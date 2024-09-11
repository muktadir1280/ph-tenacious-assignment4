function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0 || expenses > income) {
        return "Invalid Input";
    }
    const diff = (income - expenses);
    const tax = (diff * .20);
    return tax;
}
console.log(calculateTax(6000, -1500)); //remove this line