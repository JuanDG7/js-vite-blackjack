import _ from "underscore";

/**
 *Crea un nuevo Deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"];
 * @param {Array<string>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error("TiposDeCarta es obligatorio");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};
