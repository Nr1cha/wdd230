// step 1
// get values
function getValues() {
    const name = document.getElementById("fname").value;
}

function saveOrder({ name, email, phone, fruit1, fruit2, fruit3, userText }) {
    const key = name + email + phone;
    const previousValue = getOrders({name,email,phone});
    const orderTime = Date.now()
    const newValue = [
        ...previousValue,
        {
            fruit1,
            fruit2,
            fruit3,
            userText,
            orderTime,
        },
    ];
    localStorage.setItem(key, JSON.stringify(newValue));
}
function getOrders({ name, email, phone }) {
    const key = name + email + phone;
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveRecentPerson({name,email,phone}){
    const key = "recent person";
    const value = JSON.stringify({name,email,phone});
    localStorage.setItem(key,value);
}

function getRecentPerson(){
    const key = "recent person";
    return JSON.parse(localStorage.getItem(key));
}
