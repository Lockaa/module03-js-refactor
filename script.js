// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  //initializing the variables
  const employees = [];

  let firstNameIn, lastNameIn, salaryIn;
  let keepGoing = true;

  //loop to grab the info
  while(keepGoing) {
    while(!firstNameIn) {
      firstNameIn = prompt("Enter first name:");
      continue;
    }

    while(!lastNameIn) {
      lastNameIn = prompt("Enter last name:");
      continue;
    }

    while(isNaN(salaryIn) || !salaryIn) {
      salaryIn = Math.ceil(prompt("Enter salary:"));
      continue;
    }

    //making the employee object
    const employee = {
      firstName: firstNameIn,
      lastName: lastNameIn,
      salary: salaryIn
    }

    //pushing the current employee object into the array
    employees.push(employee);

    //'reseting' the values
    firstNameIn = "";
    lastNameIn = "";
    salaryIn = 0;

    //ask to continue the while loop
    keepGoing = confirm("do you want to keep adding employees?")
  }

  //return the array
  return employees;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for(let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }
  console.log("Average salary: " + sum/employeesArray.length);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let index = Math.floor(Math.random(0, 1)*(employeesArray.length-1));
  console.log("Random employee: " + employeesArray[index].firstName + " " + employeesArray[index].lastName);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);