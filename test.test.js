const fizzBuzz = require("./index");
describe("cadena de 100 numeros", () => {
  test("Comprobar si imprime 100 console.log", () => {
    const consoleSpy = jest.spyOn(console, "log");

    fizzBuzz();
    expect(consoleSpy).toHaveBeenCalledTimes(100);
    consoleSpy.mockRestore();
  });
});
