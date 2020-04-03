let password = require("../src/password_checker");

describe(" passwordIsValid", function() {
  it("should throw an error when password is an empty string", function() {
    expect(password.passwordIsValid("")).toBe("password should exist");
  });

  it("should check if password has at least have 8 characters", function() {
    expect(password.passwordIsValid("Bell@210")).toBe(
      "password should be longer than than 8 characters"
    );
  });

  it("should check if password has at least have one lowerCase", function() {
    expect(password.password_is_valid("aB5dfVFg")).toBe(
      "password should have at least one lowercase letter"
    );
  });

  it("should check if password has at least have one uppercase", function() {
    expect(password.passwordIsValid("gty*gf")).toBe(
      "password should have at least one uppercase letter"
    );
  });

  it("should check if password password has at least have one number", function() {
    expect(password("mkjnhbgfc8")).toBe(
      "password should at least have one digit"
    );
  });

  it("should check if password has at least have one special character", function() {
    expect(password("jgaf@s9")).toBe(
      "password should have at least one special character"
    );
  });
});
