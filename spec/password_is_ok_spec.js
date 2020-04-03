let password = require("../src/password_checker");

describe("Password is okay", function() {
  it("returns true if password is okay", function() {
    expect(password.password_is_ok("Bell@210")).toBe(true);
  });

  it("returns false if password is not okay", function() {
    expect(password.password_is_ok("Bell@hfghj")).toBe(false);
  });
});
