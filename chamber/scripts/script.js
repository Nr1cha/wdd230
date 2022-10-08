// const currentYear1 new Date.getfullyear

const now = new Date();
const currentYear = 2022;
const lastModified = (document.lastModified);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
// const datefieldUK = document.querySelector("#yearNow"); 

document.querySelector("#yearNow").textContent = fulldateUK;
document.querySelector('#year1').textContent = currentYear;
document.querySelector('#year2').textContent = lastModified;


