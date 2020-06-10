function passwordIsValid(password) {
    try {
        if (password == "") throw "password should exist";
        if (password.length <= 8)
            throw "password should be longer than than 8 characters";
        if (password.match(/[a-z]/g) == null)
            throw "password should have at least one lowercase letter";
        if (password.match(/[A-Z]/g) == null)
            throw "password should have at least one uppercase letter";
        if (password.match(/[@,#,!,$,%,$,&,*]/) == null)
            throw ('password should have special characters');
        if (password.match(/[0-9]/g) == null)
            throw "password should at least have one digit";

    } catch (error) {
        console.log(error);
    }
    return "password is valid";
}

console.log(passwordIsValid("password"));

function passwordIsOk(password) {
    const condition = [/[0-9]/, /[A-Z]/, /[a-z]/, /"!@#$%*()."/];
    if (password == "" || password.length < 8) {
        return false;
    }

    for (let i = 0; i < condition.length; i++) {
        if (password.match(condition[i])) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(passwordIsOk("Bel1g210@"));

module.exports = {

    passwordIsValid,
    passwordIsOk
};