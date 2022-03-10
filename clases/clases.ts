(() => {
  class Avenger {
    // Public , Private, Static, Protected
    static avgName: number; // Propiedades estáticas aquí

    constructor(
      private name: string,
      public team: string,
      avgName: number,
      public realName?: string // Puede ser omitida
    ) {
      this.name = name;
      this.team = team;
      Avenger.avgName = avgName; // Se apunta a la clase y se modifica
      this.realName = realName;
    }

    // Métodos estáticos, solo pueden apuntar a otras propiedades estáticas
    static publicMethod(): number {
      return this.avgName;
    }

    // Getters
    get getName(): string {
      return this.name;
    }

    // Setters
    set setName(name: string) {
      this.name = name;
    }
  }

  const newAvenger: Avenger = new Avenger('Zawng', 'C9', 29, 'Edwin J. Páez');
  console.log(Avenger.avgName);
  console.log(newAvenger);
  console.log(Avenger.publicMethod());
})();
