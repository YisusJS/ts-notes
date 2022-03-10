(() => {
  // Desestructuración de objetos
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
  };

  const avengers: Avengers = {
    nick: 'Test',
    ironman: 'Test',
    vision: 'Test',
  };

  const printAvenger = ({ vision, ...rest }: Avengers): string => {
    return vision;
  };

  console.log(printAvenger(avengers));

  // Desestructuración en los arreglos
  const miArreglo: string[] = ['Edwin', 'Jesús'];
  const test = miArreglo[1];
  const [edwin, jesus] = miArreglo;
  console.log(test);
  console.log(edwin, jesus);

  // Ciclo for of
  const test1: Avengers = {
    nick: 'Test',
    ironman: 'Test',
    vision: 'Test',
  };
  const test2: Avengers = {
    nick: 'Test',
    ironman: 'Test',
    vision: 'Test',
  };
  const test3: Avengers = {
    nick: 'Test',
    ironman: 'Test',
    vision: 'Test',
  };

  const avengersArray: Avengers[] = [test1, test2, test3];

  for (const iterator of avengersArray) {
    console.log(iterator);
  }

})();
