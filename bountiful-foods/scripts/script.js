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

// Date Modified stuff
const currentYear = 2022;
const lastModified = document.lastModified;

document.querySelector("#year").textContent = currentYear;
document.querySelector("#modded").textContent = lastModified;