document.getElementById("button").addEventListener("click", function () {
    const input = document.getElementById("favchap");

    if (input.value !== "") {
        // create element
        const newContent = document.createElement("li");
        newContent.innerHTML = input.value;

        // create delete button
        const deleteB = document.createElement("button");
        // give the button text
        deleteB.innerHTML = "❌";
        // giving accessibility to button
        deleteB.ariaLabel = "Delete Item";
        // appending the button to the new li
        newContent.appendChild(deleteB);
        // append it to an element in the doc
        document.getElementById("list").appendChild(newContent);

        // eventListener to button to remove item from list
        deleteB.addEventListener("click", function () {
            newContent.remove();
            input.focus();
            input.value = "";
        });
        input.focus();
        input.value = "";
    }
});
