let password = require("../src/password_checker");

describe("Password is ok", function() {
  it("returns true if password is ok", function() {
    expect(password.passwordIsOk("Bel1g210@")).toBe(true);
  });

  it("returns false if password is not ok", function() {
    expect(password.passwordIsOk("bell@2")).toBe(false);
  });
});
