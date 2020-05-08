let password = require("../src/password_checker");
var passwordTest ="Bel1g210@";

describe("password is valid", function() {
  
 it("password should exist", function(){
  expect(passwordTest).not.toBeNull();
 });

  it("should check if password has at least have 8 characters", function() {
    expect(passwordTest.length).toBeGreaterThan(8);
    
  });

  it("should check if password has at least have one lowerCase", function() {
    expect(passwordTest.match).toMatch((/[a-z]/g)); 
    
  });

  it('password should have at least one uppercase letter', function() {
    expect(passwordTest.match("Bel1g210@")).toMatch((/[A-Z]/g));
     
    
  });

  it("should check if password password has at least have one number", function() {
    expect(passwordTest.match("Bel1g210@")).toMatch((/[0-9]/g)); 
     
  });

  it("should check if password has at least have one special character", function() {
    expect(passwordTest.match("Bel1g210@")).toMatch(/[$&+,:;=?@#|'<>.^*()%!-]/g);
    
  });
 });
