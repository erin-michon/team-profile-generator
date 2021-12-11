const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Cora', '1111', 'Cora@email.com', '123-452-7891');
  
    expect(manager.name).toBe('Cora');
    expect(manager.email).toBe('Cora@email.com');
    expect(manager.id).toBe('1111');
    expect(manager.officeNumber).toBe('123-452-7891');
        
});

test('get manager name', () => {
    const manager = new Manager('Cora', '1111', 'Cora@email.com', '123-452-7891');

    expect(manager.getName()).toBe('Cora');
 
});

test('get manager email', () => {
    const manager = new Manager('Cora', '1111', 'Cora@email.com', '123-452-7891');

    expect(manager.getEmail()).toBe('Cora@email.com');

});

test('get manager id', () => {
    const manager = new Manager('Cora', '1111', 'Cora@email.com', '123-452-7891');

    expect(manager.getId()).toBe('1111');

});

test('get manager role', () => {
    const manager = new Manager('Cora', '1111', 'Cora@email.com', '123-452-7891');

    expect(manager.getRole()).toBe('Manager');

});