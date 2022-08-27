const funciones = require("./funciones");

describe("test del archivo de funciones", () => {
  test("1 + 1 =  2", () => {
    const resultado = funciones.sumar(1, 1);
    expect(resultado).toEqual(2);
  });
});
