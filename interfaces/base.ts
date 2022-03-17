(() => {
  // Las interfaces son extendibles y los type no
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string; // Recordar. su definición es diferente
  };

  // Creamos un objeto de tipo Hero
  let batman: Hero = {
    name: 'dog',
    powers: ['One', 'Two'],
    getName: () => {
      return 'Hello world';
    },
  };

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress?(): number; // Recordar
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const newClient: Client = {
    name: 'Edwin',
    age: 22,
    address: {
      id: 1,
      zip: '604822',
      city: 'San Gil',
    },
    getFullAddress() {
      return this.address.id;
    },
  };

  console.log(newClient.getFullAddress!());
})();
