class DataManager {

  // Attributes //

  #basePath: string

  // Constructor //

  constructor (basePath: string) {
    this.#basePath = basePath
  }

  // Getters & Setters //

  // Public Methods //

  async load<T> (url: string): Promise<T> {
    const headers = new Headers()

    const request = {
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

/*
const DM = new DataManager('')
interface Cards {
  cards: Card[]
}
interface Card {
  id: string
}

const loadCardsData = async () => {
  const cards: Cards = await DM.load<Cards>(`/data/cards.json`)
  cards.cards.forEach((card: Card) => {

  })
}
*/

export default DataManager