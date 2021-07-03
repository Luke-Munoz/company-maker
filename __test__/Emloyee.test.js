const { test, expect } = require('@jest/globals');
const Employee = require('../lib/employee');

test('create an employee object', () => {
    const employee = new Employee("luke", 12, "something@gmail.com");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test('makes a string for the users name', () => {
    const employee = new Employee("luke", 12, "something@gmail.com", 5);
    expect(employee.name).toEqual(expect.any(String));
});

test('user inputs a number and it logs it', () => {
    const employee = new Employee("luke", 12, "something@gmail.com", 5);
    expect(employee.id).toEqual(expect.any(Number));
});

test('user enters a string for there email', () => {
    const employee = new Employee("luke", 12, "something@gmail.com", 5);
    expect(employee.email).toEqual(expect.any(String));
});