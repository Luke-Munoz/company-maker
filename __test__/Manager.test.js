const { test, expect } = require('@jest/globals');
const Manager = require('../lib/manager');

test('create an manager object', () => {
    const manager = new Manager("luke", 12, "something@gmail.com", 5);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('makes a string for the users name', () => {
    const name = "joe"
    const manager = new Manager(name, 12, "something@gmail.com", 5);
    expect(manager.name).toEqual(name);
});

test('user inputs a number and it logs it', () => {
    const id = 12;
    const manager = new Manager("luke", id, "something@gmail.com", 5);
    expect(manager.id).toEqual(id);
});

test('user enters a string for there email', () => {
    const email = "something@gmail.com"
    const manager = new Manager("luke", 12, email, 5);
    expect(manager.email).toEqual(email);
});

test('user enters a number for there office number', () => {
    const officeNumber = 5
    const manager = new Manager("luke", 12, "something@gmail.com", officeNumber);
    expect(manager.officeNumber).toEqual(officeNumber);
});