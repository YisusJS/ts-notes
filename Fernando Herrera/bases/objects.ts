(() => {
  // Crear tipos de los objetos
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  // Creamos un objeto de tipo Hero
  let batman: Hero = {
    name: 'dog',
    powers: ['One', 'Two'],
    getName: () => {
      return 'Hello world';
    },
  };

  console.log(batman.getName!()); // Ejecutamos teniendo en que podría ser undefined

  // Multiples tipos de objetos
  let myCustomVariable: string | number | Hero = 'Edwin';
  console.log(typeof myCustomVariable);

  myCustomVariable = 21;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Edwin Páez',
    age: 43,
    powers: ['Hello', 'Hola'],
  };
  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);
})();
