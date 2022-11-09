const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');
console.log("whatever");


fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    prophets.forEach(displayProphets);
});

//   
  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthLoc = document.createElement('p');
    let dob = document.createElement('p');
    let children = document.createElement('p');

    [birthLoc,dob,children].forEach((element) => {
        element.classList.add('caption');
    })
    // let p = document.createElement('p');
    // p.classList.add('my-class');

  
    // Change the textContent property of the h2 element to contain the prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    // adding the elements
    birthLoc.textContent = `${"Birth Location:"} ${prophet.birthplace}`
    dob.textContent = `${"Birthdate:"} ${prophet.birthdate}`;
    children.textContent = `${"Number of Children:"} ${prophet.numofchildren}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + `${prophet.name}` + ` ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.append(h2,portrait,birthLoc,dob,children);
    // card.appendChild(h2);
    // card.appendChild(portrait);
    // card.appendChild(birthLoc);
    // card.appendChild(dob);
    // card.appendChild(children);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}