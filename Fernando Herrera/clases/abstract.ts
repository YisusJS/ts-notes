(() => {
  // Una calse abstracta se puede pensar como un template/plantilla/cascarón
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    get saveTheWorld(): string {
      return `Xmens save the world`;
    }
  }

  class Villian extends Mutante {
    get saveTheWorld(): string {
      return `Villians save the world`;
    }
  }
  const newXmen: Xmen = new Xmen('Mutante', 'Mutante RN');
  const newVillian: Villian = new Villian('Villian', 'Villian RN');
})();
