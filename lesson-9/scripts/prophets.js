const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
// firstName = "nick";
// lvdate = "june 15th";
// console.log (`${"Welcome back"} ${firstName}${"! You last visited on"} ${lvdate}.`);
// console.log (`Welcome back ${firstName}! You last visited on ${lvdate}.`);


async function getProphetData(){
    const response = await fetch(requestURL)
    const jsonObject = await response.json();
    const prophets = jsonObject['prophets'];
    // temporary checking for valid response and data parsing
    // console.table(jsonObject);
    prophets.forEach(displayProphets);
}
 
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
    // this is a different way of adding a p element and then adding a class name to it. 
    // let p = document.createElement('p');
    // p.classList.add('my-class');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    // adding the elements
    birthLoc.textContent = `${"Place of Birth:"} ${prophet.birthplace}`
    dob.textContent = `${"Date of Birth:"} ${prophet.birthdate}`;
    // children.textContent = `${"Number of Children:"} ${prophet.numofchildren}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + `${prophet.name}` + ` ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('height', '50%');
    portrait.setAttribute('width', '50%');

    // Add/append the section(card) with the h2 element
    card.append(h2,dob,birthLoc,portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}
getProphetData();