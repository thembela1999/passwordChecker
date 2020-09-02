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
 password_checker
    expect(passwordTest.match("Bel1g21t0@")).toMatch((/[A-Z]/g));
    expect(passwordTest.match("Bel1g210@")).toMatch((/[A-Z]/g));
 
     
    
  });

  it("should check if password password has at least have one number", function() {
password_checker
    expect(passwordTest.match("Bel1gm210@")).toMatch((/[0-9]/g)); 
    expect(passwordTest.match("Bel1g210@")).toMatch((/[0-9]/g)); 

     
  });

  it("should check if password has at least have one special character", function() {
    expect(passwordTest.match("Bel1g210@")).toMatch(/[$&+,:;=?@#|'<>.^*()%!-]/g);
    
  });
 });
