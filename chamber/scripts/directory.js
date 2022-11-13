// put URL into variable
const jsonURL = './data.json';
const cards = document.querySelector('.cards');
// console.log('file works');

// fetch the data 
async function getCompanyData(){
    const response = await fetch(jsonURL)
    const jsonObject = await response.json();
    const companys = jsonObject['companies'];
    // temporary checking for valid response and data parsing
    console.table(jsonObject);
    companys.forEach(displayBusinesses);
}

  function displayBusinesses(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let picture = document.createElement('img');
    let phoneNum = document.createElement('p');
    let address = document.createElement('p');
    let email = document.createElement('p');

    // adding classname to elements using a loop
    [phoneNum, address, email].forEach((element) => { 
        element.classList.add('caption');
    })
    // without a loop
    picture.classList.add('companyPic');
    h2.classList.add('h2List');

    // Change the textContent property of the h2 element to contain the company's full name
    // adding the elements
    h2.textContent = `${company.name}`;
    phoneNum.textContent = `${company.phoneNumber}`
    address.textContent = `${company.address}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    picture.setAttribute('src', company.image);
    picture.setAttribute('alt', 'Company name ' + `${company.name}`);
    picture.setAttribute('loading', 'lazy');
    picture.setAttribute('width', '172');
    picture.setAttribute('height', '172');

    // Add/append the section(card) with the h2 element
    card.append(h2,picture,address,phoneNum);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}


// Transition between grid and list format
const gridButton = document.querySelector(".gridbtn");
const listButton = document.querySelector(".listbtn");
const display = document.querySelector(".mainContent");

// Using arrow function
gridButton.addEventListener("click", () => {
    display.classList.add("cards");
    display.classList.remove("list");
    const images = document.querySelectorAll(".companyPic");
    images.forEach((image) => {
        image.classList.remove("hidePic");
    })

});
listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("cards");
    const images = document.querySelectorAll(".companyPic");
    images.forEach((image) => {
        image.classList.add("hidePic");
    })
});
// call getCompanyData function to fetch the external data
getCompanyData();