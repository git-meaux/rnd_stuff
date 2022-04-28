const names = [
  "Alice",
  "Bob",
  "Carol", // "Chuck",
  "Dan", // "Dave",
  "Erin",
  "Frank",
  "Grace",
  "Hugh",
  "Ivan",
  "Judy",
  "Karen", // "Kelvin",
  "Laura",
  "Mark", // "Mike",
  "Nadia", // "Nadine",
  "Olivia",
  "Paul",
  "Quinn",
  "Rachel",
  "Steve",
  "Ted",
  "Ursela",
  "Victor",
  "Wendy",
  "Xander",
  "Yvette",
  "Zoe",
];
const males = [
  "Bob",
  "Dan",
  "Frank",
  "Hugh",
  "Ivan",
  "Mark",
  "Paul",
  "Quinn",
  "Steve",
  "Ted",
  "Victor",
];
const surnames = [
  "Arthington",
  "Beckham",
  "Chadbourn",
  "Davidsons",
  "English",
  "Fanon",
  "Galletly",
  "Heath",
  "Iredale",
  "Johnson",
  "Kennington",
  "Lockwoods",
  "Maxon",
  "Neatherwood",
  "Osswald",
  "Paddington",
  "Quest",
  "Rechford",
  "Scott",
  "Thompson",
  "Ullithorn",
  "Vorbach",
  "Watson",
  "Xavier",
  "York",
  "Zimmerman",
];
const weekDay = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const month = [
  "Januari",
  "Februari",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const country_europe = [
  "Albania",
  "Andora",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia",
  "Bulgaria",
  "Croatia",
  "Czechia",
  "Denmark",
  "England",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "White-Rusia",
  "San Marino",
  "Scotland",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukrain",
];
const charString = "123456789abcdefhijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"; // l, g ,I, ,o , O, 0 removed to reduce misreading

const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const rndFlt = (min, max, decimals) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

const rndName = () => names[rndInt(0, names.length - 1)];
const rndSur = () => surnames[rndInt(0, surnames.length - 1)];
const rndDay = () => weekDay[rndInt(0, 6)];
const rndMonth = () => month[rndInt(0, 11)];
const rndEurCountry = () =>
  country_europe[(rndInt(0), country_europe.length - 1)];
const rndBday = () => `${rndInt(1, 30)}/${rndInt(1, 12)}/${rndInt(1940, 2008)}`; // output example: "23/11/1988"

const rndNumArr = (min, max, length) =>
  [...new Array(length)].map(() => rndInt(min, max));
const rndNameArr = (length) =>
  [...new Array(length)].map(() => names[rndInt(0, names.length - 1)]); // just using .map(()=> rndName) doesn't work

// method A
const genID = (length) =>
  [...new Array(length)]
    .map(() => charString.charAt(rndInt(0, charString.length - 1)))
    .join("");

// method B
// const IDgen = (length) => {
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += charString.charAt(rndInt(0, charString.length - 1));
//   }
//   return result;
// };

const getSex = (name) => {
  return males.includes(name) ? "M" : "F";
};

const rndPerson = () => {
  return {
    userID: genID(6),
    name: rndName(),
    surname: rndSur(),
    age: rndInt(18, 99),
  };
};

const rndPeople = (lenght) => [...new Array(lenght)].map(() => rndPerson());

const rndPersonDetailed = () => {
  const name = rndName();
  const surname = rndSur();
  const mailPrefix = `${name
    .charAt(0)
    .toLocaleLowerCase()}.${surname.toLowerCase()}`;

  return {
    userID: genID(4),
    name: name,
    surname: surname,
    gender: getSex(name),
    birthday: rndBday(),
    email: `${mailPrefix}@companymail.com`,
    phonenumber: `+31${rndNumArr(0, 9, 9).join("")}`,
  };
};
const rndPplDetailed = (lenght) =>
  [...new Array(lenght)].map(() => rndPersonDetailed());

// console.log(rndName(), rndSur());
// console.log(rndFlt(1.1111, 2048.9999, 4));
// console.log(rndInt(20, 30));
// console.log(rndNumArr(20, 30, 5));
// console.log(rndNameArr(14));
// console.log(fakeIDgen(12));
// console.log(rndPerson());
// console.log(rndPeople(5));
// console.log(rndPplDetailed(5));
