const daysSinceLastVisit = document.querySelector(".nowvisit");
const visitsDisplay = document.querySelector(".visits");

let daysPassed = 0;
let lastVisited;
let visitedToday = new Date();

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
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

// add values to storage
const addToStorage = () => {
    localStorage.setItem("lastVisited", visitedToday.getTime());
    localStorage.setItem("visitedToday", visitedToday.getTime());
};


const setNewDate = () => {
    localStorage.setItem("visitedToday", visitedToday.getTime());
    daysPassed = calculateDays();
};

const calculateDays = () => {
    let last = localStorage.getItem("lastVisited");
    let now = localStorage.getItem("visitedToday");

    let difference = now - last;

    daysPassed = difference / (1000 * 3600 * 24);
    daysPassed = Math.round(daysPassed);
    return daysPassed;
};

if (!localStorage.getItem("lastVisited")) {
    addToStorage();
    daysPassed = calculateDays();
} else {
    setNewDate();
}

daysSinceLastVisit.innerHTML = daysPassed;

localStorage.setItem("lastVisited", visitedToday.getTime());
