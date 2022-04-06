// Decoradores - Se ejecutan en el momento de transpilación
function printToConsole(constructor: Function) {
  console.log(constructor);
}

// Factory decorator => retorna otra función
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) return printToConsole;
  return () => {};
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// Decorador métodos - verificar si el argumento cumple unas condiciones
function CheckValidPokemonId(): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // En el descriptor podemos manipular la salida del método
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon debe estar entre 1 y 800');
      } else {
        return originalMethod;
      }
    };
  };
}

// Decorador propiedades - colocar modo readonly
// En las propiedades no aparece el descriptor
function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        return 'Edwin';
      },
      set(this, val) {
        console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readonly(false)
  public publicApi: string = 'https://pokeapi.co';
  constructor(public name: string) {}

  // Factory decorator
  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}
