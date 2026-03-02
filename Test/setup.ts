type StorageMap = Record<string, string>;

const storage: StorageMap = {};

const localStorageMock = {
  getItem: (key: string) => (key in storage ? storage[key] : null),
  setItem: (key: string, value: string) => {
    storage[key] = value;
  },
  removeItem: (key: string) => {
    delete storage[key];
  },
  clear: () => {
    Object.keys(storage).forEach((k) => delete storage[k]);
  },
};

if (!("localStorage" in globalThis)) {
  Object.defineProperty(globalThis, "localStorage", {
    value: localStorageMock,
    configurable: true,
  });
}

if (!("navigator" in globalThis)) {
  Object.defineProperty(globalThis, "navigator", {
    value: { language: "en-US" },
    configurable: true,
  });
}

if (!("document" in globalThis)) {
  Object.defineProperty(globalThis, "document", {
    value: {
      documentElement: {
        classList: {
          add: () => {},
          remove: () => {},
        },
      },
      getElementById: () => ({}) as HTMLElement,
    },
    configurable: true,
  });
}
