(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor Avenger llamado');
    }

    // Las propiedades protegigas puedes ser usadas desde clases heredadas
    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  const newAvenger: Avenger = new Avenger('Zawng', 'Edwin Páez');

  // Herencia de clases
  class Xmen extends Avenger {
    // En el súper se traen las propiedades que se heredan y también se pasan en el constructor
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log('Constructor XMen llamado');
    }

    public getFullNameXmen(): void {
      console.log(super.getFullName());
    }

    // Los setters y getters se usan para las propiedades específicas
    set setName(name: string) {
      this.name = name;
    }

    get getName(): string {
      return this.name;
    }
  }

  const newXmen: Xmen = new Xmen('Xmen name', 'Xmen real name', true);
  newXmen.getFullNameXmen();
  newXmen.setName = 'Edwin';
  console.log(newXmen.getName);
})();
