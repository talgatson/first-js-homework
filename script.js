// 1st tast
const firstName = "Aidyn";
const lastName = "Sautkali";
const age = 29;
console.log(`Меня зовут ${firstName} ${lastName} мне ${age} лет`);

// 2nd task

const city = "Taldykorgan";
console.log("Мой город " + city);

// 3th task

let password = "qwerty";
let hasAccess = !!password;
console.log(hasAccess);

let passwordEmpty = "";
let hasAccessEmpty = !!passwordEmpty;
console.log(hasAccessEmpty);

// 4th task
const isMember  = false;
const isMemberToString = isMember.toString();
console.log(isMemberToString, typeof isMemberToString);

// 5th task

const cartItems = 0;
console.log(typeof cartItems);
const cartItemsChecker = Boolean(cartItems);
console.log(cartItemsChecker);

// 6th task

const averageScore = 89.75695;
console.log(averageScore.toFixed(1));

// 7th task

const greetingMessage = "      Приветствуем вас в мире программирования!        ";
console.log(greetingMessage.trim());
console.log(greetingMessage.toUpperCase().trim());
console.log(greetingMessage.trim().includes("программирования"));


