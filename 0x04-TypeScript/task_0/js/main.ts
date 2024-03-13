interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Israa",
  lastName: "IS",
  age: 13,
  location: "Colombia"
}
const student2: Student = {
  firstName: "Yass",
  lastName: "Gh",
  age: 13,
  location: "Mexico"
}
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "yellow";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const name = document.createElement('td');
  const location = document.createElement('td');

  name.textContent = student.firstName;
  location.textContent = student.location;

  name.style.border = "1px solid red";
  location.style.border = "1px solid red";

  row.appendChild(name);
  row.appendChild(location);
  tbody.appendChild(row);
});
document.body.appendChild(table);

