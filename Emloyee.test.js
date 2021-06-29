const Employee = require("../lib/employee")

test('creates a name for the employee', () => {
    const employee = new Employee(luke);
    expect(employee.name).toEqual(expect.any(string));
});