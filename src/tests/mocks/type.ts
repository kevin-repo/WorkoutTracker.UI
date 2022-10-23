export type Mockify<T> = {
  [P in keyof T]: T[P] extends Function ? jest.Mock<{}> : T[P];
};
