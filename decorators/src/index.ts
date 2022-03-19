import { Pokemon } from './decorators/pokemon';

const charmander = new Pokemon('Charmander');

// En este punto el objeto está sellado
// (Pokemon.prototype as any).customName = 'Pikachi';

charmander.publicApi = 'edwin-p.com';
console.log(charmander);
