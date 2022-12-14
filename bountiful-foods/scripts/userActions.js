function submitForm() {
    // grab user inputs from form
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

        saveRecentPerson({name,email,phone});
        clearForm();
    } else {
        alert("please fill out the whole form noob");
    }
    return false;
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
    console.log(orders);
    let newHTML = "";
    orders.forEach((orderItem)=>{
        const {fruit1,fruit2,fruit3,userText,orderTime} = orderItem;
        const formattedOrderTime = new Date(orderTime).toString();
        newHTML+=` 
            <p>fruits ordered: ${fruit1}, ${fruit2}, ${fruit3}. </p>
            <p>time ordered: ${formattedOrderTime}</p>
        `
        if (userText)
        {
            newHTML+=` 
            <p>${userText}.</p>
        `
        }
    });
    document.querySelector(".orderSum").innerHTML = newHTML;
}


