(() => {
  // No importa las veces que se instancie, siempre será una única instancia
  class Apocalipsis {
    // Generamos una propiedad estática del mismo tipo de la clase
    static instance: Apocalipsis;

    // Generamos el constructor privado
    private constructor(public name: string) {}

    // Método estático 
    static callApocalipsis(name: string): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis(name);
      }
      return Apocalipsis.instance;
    }

    set setName(name: string) {
      this.name = name;
    }
  }

  const newApocalipsis: Apocalipsis = Apocalipsis.callApocalipsis('Edwin');
  const newApocalipsis2: Apocalipsis = Apocalipsis.callApocalipsis('Edwin');
  const newApocalipsis3: Apocalipsis = Apocalipsis.callApocalipsis('Edwin');
  const newApocalipsis4: Apocalipsis = Apocalipsis.callApocalipsis('Edwin');
  newApocalipsis3.setName = 'Perro';

  console.log(
    newApocalipsis,
    newApocalipsis2,
    newApocalipsis3,
    newApocalipsis4
  );
})();
