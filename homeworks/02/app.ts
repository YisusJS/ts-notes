// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: string[]): number => {
  return heroes.length;
};
const superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean = true): void => {
  if (llamar) {
    console.log('Batiseñal activada');
  }
};

llamarBatman();

// Rest?
const unirheroes = (...restPersons: string[]): string => {
  return restPersons.join(', ');
};
unirheroes('Hero', 'Pinocho', 'Batman');

// Tipo funcion
const noHaceNada = (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: number[]
): void => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
const noHaceNadaTampoco: (
  a: number,
  t: string,
  b: boolean,
  ar: number[]
) => void = noHaceNada;
