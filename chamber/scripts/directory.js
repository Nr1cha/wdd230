// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// async function getProphetData(){
//     const response = await fetch(requestURL)
//     const jsonObject = await response.json();
//     const prophets = jsonObject['prophets'];
//     // temporary checking for valid response and data parsing
//     // console.table(jsonObject);
//     prophets.forEach(displayProphets);
// }

 
  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthLoc = document.createElement('p');
    let dob = document.createElement('p');
    let children = document.createElement('p');
    // adding classname to elements using a loop
    [birthLoc, dob, children].forEach((element) => { 
        element.classList.add('caption');
    })



    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    // adding the elements
    birthLoc.textContent = `${"Place of Birth:"} ${prophet.birthplace}`
    dob.textContent = `${"Date of Birth:"} ${prophet.birthdate}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + `${prophet.name}` + ` ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.append(h2,dob,birthLoc,portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}
// this function call is to fetch the external data
// getProphetData();