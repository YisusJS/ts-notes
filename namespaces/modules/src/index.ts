// Importamos la clase Hero
import { Hero as SuperHero } from './classes/Hero';

// Creamos una instancia de Hero
const ironman: SuperHero = new SuperHero('Ironman', 40, 232);
console.log(ironman.power);

// Genéricos
import { genericFunction } from './generics/generics';
console.log(genericFunction(3.141516).toFixed(2));
console.log(genericFunction(new Date()).getHours());
console.log(genericFunction('Perro').charAt(3));

// Agrupar exportaciones
import { Hero, Villain } from './interfaces';
const deadpool = {
  name: 'Deadpool',
  realName: 'Edwin',
  dangerLevel: 130,
};

console.log(genericFunction<Villain>(deadpool).dangerLevel);
