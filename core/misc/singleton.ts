type ClazzBase = new (...args: any) => any

export const Singleton = <Clazz extends ClazzBase>(clazz: Clazz) => {
  let instance: Clazz

  return class {
    constructor(...args: any) {
      if (instance) {
        return instance
      }

      instance = new clazz(...args)
      return instance
    }
  } as Clazz
}
