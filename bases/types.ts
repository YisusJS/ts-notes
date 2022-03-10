(() => {
  // Función anónima autoinvocada
  // Booleans
  let isSuperman: boolean = true; // true | false

  // Numbers
  let myNumber: number = 69; // int | float

  // Strings
  let batman: string = 'Batman'; // '' | "" | ``
  console.log(`I'm ${batman[10]?.toUpperCase() || 'Batman v2'} `); // Hacemos uso del ? para validar si no existe, si no existe, retorna undefined y no rompe la ejecución, y con el or validamos si es un valor false (truthy - falsy) y lo asigna al string

  // Any - Mala práctica - No autocompleta
  let exist: any;
  let avenger; // Tipo Any
  exist = 'Soy un tipo Any';
  console.log((exist as string).charAt(0)); // Casteo: le decimos a TS que lo trate de tipo string
  exist = 12.121212;
  console.log(<number>exist.toFixed(2)); // Casteo: le decimos a TS que lo trate de tipo number

  // Arrays
  const myArray: number[] = [1, 2, 3, 4, 5]; // number - string - boolean

  // Tuples
  const hero: [string, number, boolean] = ['Dr Strange', 100, false];

  // Enum
  enum AudioLevel {
    min = 10, // Se pueden establecer los valores por defecto
    medium, // Este sería 11
    max,
  }

  let currentAudio: AudioLevel = AudioLevel.medium;

  // Void - vacío, no retorna nada
  function callBatman(): void {
    return;
  }
  callBatman();

  // Never - se usa para avisar cuando va a reventar el código
  const boom = (message: string): never => {
    throw new Error(message);
  };

  const newBoom = (myNumber: number, myString: string): never | number => {
    if (false) {
      throw new Error(myString);
    }
    return myNumber + 10;
  };

  let myTestNever: never | number = newBoom(10, 'BOOM!');
  console.log(myTestNever);

  // Null - Undefined -- strictNullChecks
  let nothing: undefined = undefined;
  console.log(nothing);
})();
