document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("bucketList");
    const inputField = document.getElementById("newItem");
    const addButton = document.getElementById("addButton");

    function addItem() {
        const newItemText = inputField.value.trim();
        if (newItemText === "") return; 

        
        const newDetails = prompt("Enter details for this item:");

        
        const newItem = document.createElement("li");
        newItem.innerHTML = `
            <span class="icon">⭐</span>
            <span class="item">${newItemText}</span>
            <div class="details">${newDetails || "No details added yet."}</div>
        `;

        
        newItem.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });

        
        list.appendChild(newItem);
        inputField.value = "";
    }

    
    addButton.addEventListener("click", addItem);

    
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addItem();
        }
    });

    
    document.querySelectorAll(".bucket-list li").forEach((item) => {
        item.addEventListener("click", function () {
            this.classList.toggle("expanded");
        });
    });
});
