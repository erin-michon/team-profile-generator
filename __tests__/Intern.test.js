const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Trey', '555', 'Trey@email.com', 'MSG');
  
    expect(intern.name).toBe('Trey');
    expect(intern.email).toBe('Trey@email.com');
    expect(intern.id).toBe('555');
    expect(intern.school).toBe('MSG')
        
});

test('get intern name', () => {
    const intern = new Intern('Trey', '555', 'Trey@email.com', 'MSG');

    expect(intern.getName()).toBe('Trey');

});

test('get intern email', () => {
    const intern = new Intern('Trey', '555', 'Trey@email.com', 'MSG');

    expect(intern.getEmail()).toBe('Trey@email.com');

});

test('get intern id', () => {
    const intern = new Intern('Trey', '555', 'Trey@email.com', 'MSG');

    expect(intern.getId()).toBe('555');

});

test('get intern role', () => {
    const intern = new Intern('Trey', '555', 'Trey@email.com', 'MSG');

    expect(intern.getRole()).toEqual('Intern');

});

test('get intern school', () => {
    const intern = new Intern('Trey', '555', 'Trey@email.com', 'MSG');

    expect(intern.getSchool()).toEqual('MSG');

});