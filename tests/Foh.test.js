const teamMember = require('../lib/Employee');
const Employee = require('../lib/Foh')


test('creating Employee profile', () => {
  const Employee = new teamMember('George', 'W', '1234@fakeguy.com',3, 'yes');
  
    expect(Employee.first_name).toEqual(expect.any(String));
    expect(Employee.last_name).toEqual(expect.any(String));
    expect(Employee.empId).toEqual(expect.any(Number));
    expect(Employee.email).toEqual(expect.any(String));
    expect(Employee.TABC).toEqual(expect.any(String));

  });

  test("get Employee first name", () => {
    const Employee = new teamMember('George', 'W', '1234@fakeguy.com',3, 'yes');

    expect(Employee.getfirstName()).toEqual(expect.any(String));
  });

  test("get Employee last name", () => {
    const Employee = new teamMember('George', 'W', '1234@fakeguy.com',3, 'yes');

    expect(Employee.getlastName()).toEqual(expect.any(String));
  });

  test("get Employee email", () => {
    const Employee = new teamMember('George', 'W', '1234@fakeguy.com',3, 'yes');

    expect(Employee.getEmail()).toEqual(expect.any(String));
  });

  test("get Employee Id #", () => {
    const Employee = new teamMember('George', 'W', '1234@fakeguy.com',3, 'yes');

    expect(Employee.getEmpId()).toEqual(expect.any(Number));
  });

  test("get Employee TABC Confirmation", () => {
    const Foh = new teamMember('George', 'W', '1234@fakeguy.com',3, 'yes');

    expect(Foh.getTABC()).toEqual(expect.any(String));
  });

  test("get Empployee role", () => {
    const Employee = new teamMember('George', 'W', '1234@fakeguy.com',3, 'yes');

    expect(Employee.getRole()).toEqual(expect.any(String));
  });