const { test, expect } = require('@jest/globals');
const Intern = require('../lib/intern');

test('create an intern object', () => {
    const intern = new Intern("luke", 12, "something@gmail.com", 5);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.officeNumber).toEqual(expect.any(Number));
});

test('makes a string for the users name', () => {
    const intern = new Intern("luke", 12, "something@gmail.com", 5);
    expect(intern.name).toEqual(expect.any(String));
});

test('user inputs a number and it logs it', () => {
    const intern = new Intern("luke", 12, "something@gmail.com", 5);
    expect(intern.id).toEqual(expect.any(Number));
});

test('user enters a string for there email', () => {
    const intern = new Intern("luke", 12, "something@gmail.com", 5);
    expect(intern.email).toEqual(expect.any(String));
});

test('user enters a number for there office number', () => {
    const intern = new Intern("luke", 12, "something@gmail.com", 5);
    expect(intern.officeNumber).toEqual(expect.any(Number));
});