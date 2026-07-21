




// CREATE AN ARRAY OF EMPLOYEES


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY


// GET DOM ELEMENTS


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
// form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION

    // GET THE VALUES FROM THE TEXT BOXES

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

// });

// DELETE EMPLOYEE
//empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

// });

// BUILD THE EMPLOYEES GRID
// function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

// };


"use strict";

// INITIAL EMPLOYEE DATA
let employees = [
    [1001, "John Smith", 1234, "john@example.com", "Sales"],
    [1002, "Mary Jones", 2345, "mary@example.com", "Marketing"],
    [1003, "Robert Brown", 3456, "robert@example.com", "IT"],
    [1004, "Susan White", 4567, "susan@example.com", "Finance"],
    [1005, "David Green", 5678, "david@example.com", "HR"]
];

// GET DOM ELEMENTS
const form = document.getElementById("addForm");
const tbody = document.querySelector("#employees tbody");
const countOutput = document.getElementById("empCount");

// LOAD DATA FROM LOCAL STORAGE
const storedEmployees = localStorage.getItem("employees");

if (storedEmployees) {
    employees = JSON.parse(storedEmployees);
}

// BUILD EMPLOYEE GRID
function buildGrid() {

    // CLEAR EXISTING ROWS
    tbody.innerHTML = "";

    // BUILD NEW ROWS
    for (const employee of employees) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td>
                <button class="btn btn-danger btn-sm delete">
                    X
                </button>
            </td>
        `;

        tbody.appendChild(row);
    }

    // UPDATE EMPLOYEE COUNT
    countOutput.textContent = employees.length;

    // SAVE TO LOCAL STORAGE
    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );
}

// ADD EMPLOYEE
function addEmployee(employee) {

    employees.push(employee);

    buildGrid();
}

// DELETE EMPLOYEE
function deleteEmployee(index) {

    if (confirm("Are you sure you want to delete this employee?")) {

        employees.splice(index, 1);

        buildGrid();
    }
}

// FORM SUBMIT
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const id = document.getElementById("id").value.trim();
    const name = document.getElementById("name").value.trim();
    const extension = document.getElementById("extension").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;

    // CREATE EMPLOYEE ARRAY
    const employee = [
        Number(id),
        name,
        Number(extension),
        email,
        department
    ];

    addEmployee(employee);

    form.reset();
});

// DELETE BUTTON EVENT (EVENT DELEGATION)
tbody.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete")) {

        const row = e.target.closest("tr");

        const index = Array.from(tbody.rows).indexOf(row);

        deleteEmployee(index);
    }
});

// INITIAL GRID BUILD
buildGrid();
