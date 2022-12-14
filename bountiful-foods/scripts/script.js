const now = new Date();
const dayofweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const d = new Date();
let day = dayofweek[d.getDay()];
// console.log(day);

//Day Logic
// if (day === "Monday" || day === "Tuesday") {
//     const string =
//         "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
//     const newElement = document.createElement("h2");
//     newElement.innerText = string;
//     document.getElementById("banner").appendChild(newElement);
// }

// Date Modified stuff
const currentYear = 2022;
const lastModified = document.lastModified;
// const fulldateUK = new Intl.DateTimeFormat("en-UK", {
//     dateStyle: "full",
// }).format(now);
// const datefieldUK = document.querySelector("#yearNow");

// document.querySelector("#yearNow").textContent = fulldateUK;
document.querySelector("#year").textContent = currentYear;
document.querySelector("#modded").textContent = lastModified;