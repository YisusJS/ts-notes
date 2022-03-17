// Los genéricos nos sirven cuando no sabemos qué parámetros vamos a recibir y así TS detecta el tipo y nos ayuda
export const printObject = <T>(argument: T): T => argument;

export function genericFunction<T>(argument: T): T {
  return argument;
}
