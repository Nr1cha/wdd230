const fruitUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function apiFetch() {
    try {
        const response = await fetch(fruitUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.table(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function createOption(fruitData){
    const newItem = document.createElement("option");
    const item = fruitData.name;
    newItem.value = item;
    newItem.append(item);
    return newItem;

}

function displayResults(fruitData) {
    document.querySelector("#fruit1").append(createOption(fruitData));
    document.querySelector("#fruit2").append(createOption(fruitData));
    document.querySelector("#fruit3").append(createOption(fruitData));
}

async function init() {
    const data = await apiFetch();
// beginning of loop
data.forEach((item) => {
    displayResults(item);
})
}
init();