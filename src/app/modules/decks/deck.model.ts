export interface Deck {
  id: string | undefined;     // Deck unique Id
  name: string;               // Deck name
  cards: string[];            // Ids of attached cards
}
