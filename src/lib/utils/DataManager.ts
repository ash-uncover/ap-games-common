export class DataManager {

  // Attributes //

  #basePath: string

  // Constructor //

  constructor (basePath: string) {
    this.#basePath = basePath
  }

  // Getters & Setters //

  // Public Methods //

  async load<T> (url: string, options?: object): Promise<T> {
    const headers = new Headers()

    const request = {
      ...options,
      method: 'GET',
      headers
    }

    const response = await fetch(
      `${this.#basePath}${url}`,
      request
    )

    return await <T>response.json()
  }
}
