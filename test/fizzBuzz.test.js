const Fizz_buzz = require("../fizzBuzz.js")

describe("Fizz_buzz", () => {
  test("retorna FizzBuzz si el número es divisible por 3 y 5", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(15)).toBe("FizzBuzz");
  });

  test("retorna Fizz si el número es divisible por 3 pero no por 5", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(21)).toBe("Fizz");
  });

  test("retorna Buzz si el número es divisible por 5 pero no por 3", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(5)).toBe("Buzz");
  });

  test("retorna el número como una cadena si no es divisible por 3 ni por 5", () => {
    const fizz_buzz = new Fizz_buzz();
    expect(fizz_buzz.retornar_fizzBuzz(19)).toBe("13");
  });
});