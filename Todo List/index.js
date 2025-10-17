function update() {
    let title = document.getElementById('title').value;
    let desc = document.getElementById('description').value;

    if (title === "" || desc === "") {
        alert("Please add both title and description.");
        return;
    }

    let itemsJsonArray;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
    } else {
        itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson'));
    }

    itemsJsonArray.push([title, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    populateList();
}

function populateList() {
    let itemsJsonArray;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
    } else {
        itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson'));
    }

    let tableBody = document.getElementById('tableBody');
    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-primary" onclick="deleteItem(${index})">Delete</button></td>
            </tr>`;
    });
    tableBody.innerHTML = str;
}

function deleteItem(itemIndex) {
    let itemsJsonArray = JSON.parse(localStorage.getItem('itemsJson'));
    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    populateList();
}

function clearStorage() {
    if (confirm("Do you really want to clear the list?")) {
        localStorage.clear();
        populateList();
    }
}

document.getElementById('add').addEventListener("click", update);
populateList();
