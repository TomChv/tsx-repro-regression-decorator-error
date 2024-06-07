import "reflect-metadata"

type Class = { new (...args: any[]): any }

let object = (): (<T extends Class>(constructor: T) => T) => {
  return <T extends Class>(constructor: T): T => {
    Reflect.defineMetadata(constructor.name, { class_: constructor }, this)

    return constructor
  }
}

@object()
class Test {
  foo(): string {
    return "a"
  }
}

const t = new Test()
console.log(t.foo())