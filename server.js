const inquirer = require('inquirer');
const db = require('./connection');

async function promptUser() {
  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: 'EMPLOYEE MANAGER and  What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit application',
      ],
    },
  ]);

  switch (action) {
    case 'View all departments':
      await viewAllDepartments();
      break;
    case 'View all roles':
      await viewAllRoles();
      break;
    case 'View all employees':
      await viewAllEmployees();
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;
    case 'Exit application':
      db.end();
      break;
    default:
      console.log('Invalid action');
  }
  promptUser();
}

async function addDepartment() {
  const { departmentName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'What is the name of the new department?',
    },
  ]);

  await db.query('INSERT INTO department SET ?', {
    name: departmentName,
  });
}

async function addRole() {
  const departments = await db.query('SELECT * FROM department');

  const { title, salary, department } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title/name of the new role? ',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of the role? ',
    },
    {
      type: 'list',
      name: 'department',
      message: 'Which department does the role belong to? ',
      choices: departments.map((department) => department.name),
    },
  ]);

  const departmentId = departments.find(
    (d) => d.name === department
  ).id;

  await db.query('INSERT INTO role SET ?', {
    title,
    salary,
    department_id: departmentId,
  });
}

async function addEmployee() {
  const roles = await db.query('SELECT * FROM role');

  const { first_name, last_name, role_id } = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "What is the employee's first name?",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What is the employee's last name?",
    },
    {
      type: 'list',
      name: 'role_id',
      message: "What is the employee's role ID?",
      choices: roles.map((role) => ({ name: role.title, value: role.id })),
    },
  ]);

  await db.query('INSERT INTO employee SET ?', {
    first_name,
    last_name,
    role_id,
  });
}

async function updateEmployeeRole() {
  const employees = await db.query('SELECT * FROM employee');

  const { employee, role_id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: "Which employee's role do you want"
    }
])
}