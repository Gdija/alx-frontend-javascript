var student1 = {
    firstName: "Israa",
    lastName: "IS",
    age: 13,
    location: "Colombia"
};
var student1 = {
    firstName: "Yass",
    lastName: "Gh",
    age: 13,
    location: "Mexico"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "yellow";
tbody.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var name = document.createElement('td');
    var location = document.createElement('td');
    name.textContent = student.firstName;
    location.textContent = student.location;
    name.style.border = "1px solid red";
    location.style.border = "1px solid red";
    row.appendChild(name);
    row.appendChild(location);
    tbody.appendChild(row);
});
document.body.appendChild(table);
