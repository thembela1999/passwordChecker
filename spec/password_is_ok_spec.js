let password = require("../src/password_checker");

describe("Password is ok", function() {
  it("returns true if password is ok", function() {
    expect(password.passwordIsOk("Bell")).toBe(false);
  });

  it("returns false if password is not ok", function() {
    expect(password.passwordIsOk("Bell@2")).toBe(false);
  });
});
