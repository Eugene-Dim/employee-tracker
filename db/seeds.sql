WITH department (id, name) AS (
  VALUES
    (1, 'Sales'),
    (2, 'Engineering'),
    (3, 'Finance'),
    (4, 'Legal')
), 
role (id, title, salary, department_id) AS (
  VALUES
    (1, 'Sales Lead', 131000, 1),
    (2, 'Salesperson', 82007, 1),
    (3, 'Lead Engineer', 140000, 2),
    (4, 'Software Engineer', 150000, 2),
    (5, 'Account Manager', 181000, 3),
    (6, 'Accountant', 155100, 3),
    (7, 'Legal Team Lead', 121000, 4),
    (8, 'Lawyer', 230010, 4)
),
employee (id, first_name, last_name, role_id, manager_id) AS (
  VALUES
    (1, 'Bob', 'builder', 2, NULL),
    (2, 'Jack', 'Dor', 1, 1),
    (3, 'Elon', 'Musk', 4, NULL),
    (4, 'sergey', 'brin', 5, 3),
    (5, 'bill', 'gates', 4, NULL),
    (6, 'Brad', 'pit', 5, 2),
    (7, 'Edward', 'Norton', 5, NULL),
    (8, 'Nord', 'vpn', 2, 3)
)

INSERT INTO department (id, name)
SELECT id, name FROM department;

INSERT INTO role (id, title, salary, department_id)
SELECT id, title, salary, department_id FROM role;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
SELECT id, first_name, last_name, role_id, manager_id FROM employee;
