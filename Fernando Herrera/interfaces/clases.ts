(() => {
  // Implementar las interfaces en las clases
  interface Villian {
    name: string;
    age: number;
  }

  interface Power {
    fire: boolean;
    water: boolean;
  }

  class CreateVillian implements Villian, Power {
    public name: string;
    public age: number;
    public fire: boolean;
    public water: boolean;

    constructor(name: string, age: number, fire: boolean, water: boolean) {
      this.name = name;
      this.age = age;
      this.fire = fire;
      this.water = water;
    }
  }

  const test = new CreateVillian('Edwin', 22, true, false);
  console.log(test);
})();
