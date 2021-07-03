const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer');

test('create an engineer object', () => {
    const engineer = new Engineer("luke", 12, "something@gmail.com", 5);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.officeNumber).toEqual(expect.any(Number));
});

test('makes a string for the users name', () => {
    const engineer = new Engineer("luke", 12, "something@gmail.com", 5);
    expect(engineer.name).toEqual(expect.any(String));
});

test('user inputs a number and it logs it', () => {
    const engineer = new Engineer("luke", 12, "something@gmail.com", 5);
    expect(engineer.id).toEqual(expect.any(Number));
});

test('user enters a string for there email', () => {
    const engineer = new Engineer("luke", 12, "something@gmail.com", 5);
    expect(engineer.email).toEqual(expect.any(String));
});

test('user enters a number for there office number', () => {
    const engineer = new Engineer("luke", 12, "something@gmail.com", 5);
    expect(engineer.officeNumber).toEqual(expect.any(Number));
});