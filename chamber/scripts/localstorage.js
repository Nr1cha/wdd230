// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
const latestVisit = document.querySelector(".nowvisit")

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// last visit timestamp
let lastVisit = Number(window.localStorage.getItem("nowvisit-ls"))

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
todayDisplay.textContent = Date.now();
