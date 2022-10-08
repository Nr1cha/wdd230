// const currentYear1 new Date.getfullyear

const now = new Date();
const currentYear = 2022;
const lastModified = (document.lastModified);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// const datefieldUK = document.querySelector("#yearNow"); 

document.querySelector("#yearNow").textContent = fulldateUK;
document.querySelector('#year').textContent = currentYear;
document.querySelector('#modded').textContent = lastModified;


