import { Mockify } from './type';

export function mapToMockify<T extends Object>(
  fct: Function,
  implementations?: any
): Mockify<T> {
  let newObject: any = {} as Mockify<T>;

  const properties = Object.getOwnPropertyNames(fct.prototype);

  for (let i: number = 0; i < properties.length; i++) {
    let mockFunction = jest.fn();

    if (implementations && implementations[properties[i]]) {
      mockFunction = implementations[properties[i]];
    }

    newObject[properties[i]] = mockFunction;
  }

  return newObject;
}
