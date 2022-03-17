// Definir los tipos de cada variable / función
(() => {
  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum power {
    flash = 1,
    superman = 5,
    batman = 10,
    acuaman = 14,
  }

  const fuerzaFlash: power = power.flash;
  const fuerzaSuperman: power = power.superman;
  const fuerzaBatman: power = power.batman;
  const fuerzaAcuaman: power = power.acuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
