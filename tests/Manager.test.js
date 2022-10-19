const Employee = require('../lib/Employee');
const Boss = require('../lib/Manager')


test('creating Manager profile', () => {
    const Manager = new Boss('George', 'W', 3, '1234@fakeguy.com', 420);
  
    expect(Manager.first_name).toEqual(expect.any(String));
    expect(Manager.last_name).toEqual(expect.any(String));
    expect(Manager.empId).toEqual(expect.any(Number));
    expect(Manager.email).toEqual(expect.any(String));
    expect(Manager.OfficeNum).toEqual(expect.any(Number));

  });

  test("get Manager first name", () => {
    const Manager = new Boss('George', 'W', 420, '1234@fakeguy.com', 3);

    expect(Manager.getfirstName()).toEqual(expect.any(String));
  });

  test("get Manager last name", () => {
    const Manager = new Boss('George', 'W', 420, '1234@fakeguy.com', 3);

    expect(Manager.getlastName()).toEqual(expect.any(String));
  });

  test("get Manager Id #", () => {
    const Manager = new Boss('George', 'W', 420, '1234@fakeguy.com', 3);

    expect(Employee.getEmpId()).toEqual(expect.any(Number));
  });

  test("get Manager office number", () => {
    const Manager = new Boss('George', 'W', 420, '1234@fakeguy.com', 3);

    expect(Manager.getOfficeNum()).toEqual(expect.any(Number));
  });

  test("get Manager email", () => {
    const Manager = new Boss('George', 'W', 420, '1234@fakeguy.com', 3);

    expect(Manager.getEmail()).toEqual(expect.any(Number));
  });

  test("get Manager role", () => {
    const Manager = new Boss('George', 'W', 420, '1234@fakeguy.com', 3);

    expect(Manager.getRole()).toEqual(expect.any(String));
  });