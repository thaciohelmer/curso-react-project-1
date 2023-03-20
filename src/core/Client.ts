export default class Client {
  #id?: string | null = null
  #name: string
  #age: number

  constructor(name: string, age: number, id: string | null = null) {
    this.#name = name
    this.#id = id
    this.#age = age
  }

  static getClient() {
    return new Client('', 0, null)
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get age() {
    return this.#age
  }

};
