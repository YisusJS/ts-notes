(() => {
  class Villian {
    static test: string;
    constructor(private name: string, public realName: string, test: string) {
      Villian.test = test;
    }
  }

  const newVillian: Villian = new Villian('Zawng', 'Edwin', 'Test');
  console.log(Villian.test);
})();
