function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email"
    }
    const check = email.split('@');
    const userName = check[0];
    const domainName = check[1];
    return userName + ' sent you an email from ' + domainName;
}
console.log(sendNotification('nadim.naem5@outlook.com')); // remove this line