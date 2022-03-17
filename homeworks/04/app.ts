// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log('...... gogogo!!!');
  },
};

conducirBatimovil(batimovil);

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log('JAJAJAJA');
  }
};

reir(guason);

// Cree una interfaz para la siguiente función

interface Ciudadanos {
  (ciudadanos: string[]): number;
}

let ciudadGotica: Ciudadanos;

ciudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

let test = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

ciudadGotica(['hola', 'que', 'tal']);

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface User {
  nombre: string;
  edad: number;
  sexo: boolean;
  estadoCivil: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements User {
  public nombre: string;
  public edad: number;
  public sexo: boolean;
  public estadoCivil: string;

  constructor(
    nombre: string,
    edad: number,
    sexo: boolean,
    estadoCivil: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
  }

  imprimirBio() {
    console.log('xd');
  }
}
