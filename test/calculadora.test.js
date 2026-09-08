const {
    sumar,
    restar,
    multiplicar,
    dividir
} = require("../src/calculadora");

test("Suma 5 + 3 = 8", () => {
    expect(sumar(5, 3)).toBe(8);
});

test("Resta 5 - 3 = 2", () => {
    expect(restar(5, 3)).toBe(2);
});

test("Multiplica 5 * 3 = 15", () => {
    expect(multiplicar(5, 3)).toBe(15);
});

test("Divide 6 / 3 = 2", () => {
    expect(dividir(6, 3)).toBe(2);
});

test("No permite dividir entre cero", () => {
    expect(() => dividir(10, 0)).toThrow();
});