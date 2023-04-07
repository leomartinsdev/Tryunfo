import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="cardname">
            Nome:
            <input
              name="cardname"
              id="cardname"
              type="text"
              data-testid="name-input"
            />
          </label>

          <label htmlFor="description">
            Descrição:
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="atributo1">
            Atributo 1:
            <input
              type="number"
              name="atributo1"
              id="atributo1"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="atributo2">
            Atributo 2:
            <input
              type="number"
              name="atributo2"
              id="atributo2"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="atributo3">
            Atributo 3:
            <input
              type="number"
              name="atributo3"
              id="atributo3"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="imageUrl">
            Imagem:
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rarity">
            Raridade:
            <select name="rarity" id="rarity" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="superTrunfo">
            Super Trunfo:
            <input
              type="checkbox"
              name="superTrunfo"
              id="superTrunfo"
              data-testid="trunfo-input"
            />
          </label>

          <label htmlFor="save">
            <button data-testid="save-button" name="save" type="button">Salvar</button>
          </label>
        </form>
      </div>
    );
  }
}
