(() => {
  // Implementar las interfaces en las funciones
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = (a: number, b: number) => a + b;

})();
