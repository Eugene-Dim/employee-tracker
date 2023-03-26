# employee-tracker

## aplication
This command-line application enables users to efficiently manage a company's departments, roles, and employees.


## start
To initiate the application, navigate to the project directory in your terminal and execute the following commands: 'npm install', 'node server.js', and 'mysql2'.


Upon launching the application, you will be presented with a main menu that prompts you to select an action by entering a corresponding number. The available options include: viewing all departments, roles, and employees, adding a new department, role, or employee, and updating an employee's role.

Depending on the chosen action, you may need to provide additional information.


## functionality
The functionalities of each action are as follows:

View all departments: Displays a formatted table featuring all departments and their corresponding IDs.
View all roles: Shows a formatted table containing all roles, including their job titles, IDs, department names, and salaries.
View all employees: Presents a formatted table showing all employees and their respective IDs, first and last names, job titles, departments, salaries, and managers.
Add a department: Enables you to add a new department to the database. The application will prompt you to input the name of the new department.
Add a role: Allows you to add a new role to the database. The application will prompt you to provide the title, salary, and department ID for the new role.
Add an employee: Enables you to add a new employee to the database. The application will prompt you to input the employee's first and last names, role ID, and manager ID.
Update an employee role: Allows you to modify an employee's role. The application will prompt you to select the employee you wish to update and their new role. The new information will then be updated in the database.