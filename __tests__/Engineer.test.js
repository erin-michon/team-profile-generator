const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Paul', '8888', 'Paul@email.com', 'Paul Github');
  
    expect(engineer.name).toBe('Paul');
    expect(engineer.email).toBe('Paul@email.com');
    expect(engineer.id).toBe('8888');
    expect(engineer.github).toEqual('Paul Github');
        
});

test('get engineer name', () => {
    const engineer = new Engineer('Paul', '8888', 'Paul@email.com', 'Paul Github');

    expect(engineer.getName()).toBe('Paul');

});

test('get engineer email', () => {
    const engineer = new Engineer('Paul', '8888', 'Paul@email.com', 'Paul Github');

    expect(engineer.getEmail()).toBe('Paul@email.com');

});

test('get engineer id', () => {
    const engineer = new Engineer('Paul', '8888', 'Paul@email.com', 'Paul Github');

    expect(engineer.getId()).toBe('8888');;

});

test('get engineer role', () => {
    const engineer = new Engineer('Paul', '8888', 'Paul@email.com', 'Paul Github');

    expect(engineer.getRole()).toEqual('Engineer');

});