// Una función anónima autollamada se usa para no tener conflictos con el scope
(() => {
  // Función declarativa
  // Parámetros obligatorios, por defecto y opcionales
  function returnName(
    name: string,
    lastname: string = 'Stark',
    upper?: boolean
  ): string {
    return `${name} ${lastname} ${upper}`;
  }

  // Arrow functions
  const newName = (): string => {
    return 'Hola';
  };

  // Parámetros Rest
  const fullName = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(' ')}`;
  };

  const superman = fullName('Clark', 'Joseph', 'Kent');
  console.log({ superman });

  // Tipo de dato function
  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string): string => 'Hello ' + name;
  const saveTheWorld = (): string => 'Hello world';

  const NumberTypeFunction: (a: number, b: number) => number = addNumber;
  console.log(NumberTypeFunction(2, 2));

  const greetTypeFunction: (name: string) => string = greet;
  console.log(greetTypeFunction('Edwin'));

  const functionType: () => string = saveTheWorld;
  console.log(functionType());
})();
