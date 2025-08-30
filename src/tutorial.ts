function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("Hello TS");
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Suupp!!!",
  getValue() {
    return this.value;
  },
};
