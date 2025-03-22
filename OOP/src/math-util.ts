export namespace MathUtil {
  export const PI: number = 3.14159265358979323846;

  export function sum(...values: number[]): number {
    return values.reduce((acc, val) => acc + val);
  }
}
