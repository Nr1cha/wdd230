function submitForm() {
    const name = document.querySelector("#fname").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#mphone").value;
    const fruit1 = document.querySelector("#fruit1").value;
    const fruit2 = document.querySelector("#fruit2").value;
    const fruit3 = document.querySelector("#fruit3").value;
    const userText = document.querySelector("#textarea").value;
    const isValid = name && email && phone && fruit1 && fruit2 && fruit3;
    if (isValid) {
        saveOrder({name,email,phone,fruit1,fruit2,fruit3,userText});
        showOrders({name,email,phone});
        const nutrients = addNutrients({fruit1,fruit2,fruit3});
        showNutrients(nutrients);
        saveRecentPerson({name,email,phone});
        clearForm();
    } else {
        alert("please fill out the whole form.");
    }
    return 
    false;
}

function showNutrients({totalCalories,totalCarbs,totalFat,totalProtein,totalSugar}) {
    const cal = document.createElement("p");
    const carb = document.createElement("p");
    const fats = document.createElement("p");
    const prot = document.createElement("p");
    const sug = document.createElement("p");

    cal.textContent = `total calories: ${totalCalories}`;
    carb.textContent = `total carbohydrates: ${totalCarbs}`;
    fats.textContent = `total fat: ${totalFat}`;
    prot.textContent = `total protein: ${totalProtein}`;
    sug.textContent = `total sugar: ${totalSugar}`;

    document.querySelector(".orderSum").append(cal,carb,fats,prot,sug);

}

function addNutrients({fruit1,fruit2,fruit3}){
    let totalCalories = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    let totalProtein = 0;
    let totalSugar = 0;
    const fruitStuff1 = getFruit(fruit1);
    const fruitStuff2 = getFruit(fruit2);
    const fruitStuff3 = getFruit(fruit3);
    [fruitStuff1,fruitStuff2,fruitStuff3].forEach((item) => {

        totalCalories = item.nutritions.calories + totalCalories;
        totalCarbs = item.nutritions.carbohydrates + totalCarbs;
        totalFat = item.nutritions.fat + totalFat;
        totalProtein = item.nutritions.protein + totalProtein;
        totalSugar = item.nutritions.sugar + totalSugar;
    });
    return {totalCalories,totalCarbs,totalFat,totalProtein,totalSugar};
} 

function getFruit(name){
    return fruitData.find((fruit) => {
        return fruit.name.toString() === name;
     })
}

function clearForm() {
    document.querySelector("#fname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mphone").value = "";
    document.querySelector("#fruit1").value = "";
    document.querySelector("#fruit2").value = "";
    document.querySelector("#fruit3").value = "";
    document.querySelector("#textarea").value = "";
}
// orderSum
function showOrders({name,email,phone}){
    const orders = getOrders({name,email,phone});
    const orderItem = orders[orders.length - 1];
    let newHTML = "";
    const {fruit1,fruit2,fruit3,userText,orderTime} = orderItem;
    const formattedOrderTime = new Date(orderTime);
    let newFormatOrderTime = formattedOrderTime.toLocaleTimeString();
    
    newHTML+=` 
        <p>Time Ordered: ${newFormatOrderTime}</p>
        <p>Fruits Ordered: ${fruit1}, ${fruit2}, ${fruit3}. </p>
    `
    if (userText)
    {
        newHTML+=` 
        <p>${userText}.</p>
    `
    }
    document.querySelector(".orderSum").innerHTML = newHTML;
}


