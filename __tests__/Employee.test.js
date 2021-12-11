const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Erin', '9999', 'Erin@email.com');
  
    expect(employee.name).toBe('Erin');
    expect(employee.email).toBe('Erin@email.com');
    expect(employee.id).toBe('9999');
        
});

test('get employee name', () => {
    const employee = new Employee('Erin', '9999', 'Erin@email.com');

    expect(employee.getName()).toBe('Erin');

});

test('get employee email', () => {
    const employee = new Employee('Erin', '9999', 'Erin@email.com');

    expect(employee.getEmail()).toBe('Erin@email.com');

});

test('get employee id', () => {
    const employee = new Employee('Erin', '9999', 'Erin@email.com');

    expect(employee.getId()).toBe('9999');

});

test('get employee role', () => {
    const employee = new Employee('Erin', '9999', 'Erin@email.com');

    expect(employee.getRole()).toEqual('Employee');

});