let password='Key'
let name='Alex Razor'
function passwordValidation(password){
  if(password.length>0 && 
    typeof(password==='string')&&
    password.length<15
    ){
    return true
  }else{return false}
}
function nameValidation(name){
  if(name.length>0 && 
    typeof(name==='string')&&
    name.length<25&&
    name[0]===name[0].toUpperCase()
    ){
    return true
  }else{return false}
}
describe("password test", () => {
  test("password is not zero length", () => {
    expect(passwordValidation('qwerty')).toBe(true);
  });
    test("password is string", () => {
    expect(passwordValidation('1234')).toBe(true);
  });
  test("password has zero length", () => {
    expect(passwordValidation('')).toBe(false);
  });
  test("password is not string", () => {
    expect(passwordValidation(123)).toBe(false);
  });
  test("password length is less than 15 symbols", () => {
    expect(passwordValidation('123')).toBe(true);
  });
  test("password length is more than 15 symbols", () => {
    expect(passwordValidation('123151515151515asdasdas')).toBe(false);
  });
});
describe("name test", () => {
  test("name is string", () => {
    expect(nameValidation('Qwerty')).toBe(true);
  });
  test("name has zero length", () => {
    expect(nameValidation('')).toBe(false);
  });
  test("name is not string", () => {
    expect(nameValidation(123)).toBe(false);
  });
  test("name length is less than 25 symbols", () => {
    expect(nameValidation('Alexander')).toBe(true);
  });
  test("name length is more than 25 symbols", () => {
    expect(nameValidation('Alexander123151515151515asdasdas')).toBe(false);
  });
  test("first symbol is a capital", () => {
    expect(nameValidation('Alexander')).toBe(true);
  });
  test("first symbol is not a capital", () => {
    expect(nameValidation('alexander')).toBe(false);
  });
});
