function addTwo(num) {
    // num is any and which is not a good practice
    return num + 2;
}
addTwo(5);
function addTwoUpdated(num) {
    // infer num :number
    return num + 2;
}
addTwoUpdated(5);
function signUpUser(name, email, isPaid) { }
var isLoginUser = signUpUser("abc", "email", true);
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok";
}
// Arrow function
var getHello = function (s) {
    return "";
};
var heros = ["thor", "supermanhttps://www.youtube.com/"];
// typescript is  aware of the context it is coming up
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
// Some functions never return a value:
// The never type represents values which are never observed.
// In a return type, this means that the function throws an exception or terminates execution of the program.
function handleError(errMsg) {
    throw new Error(errMsg);
}
