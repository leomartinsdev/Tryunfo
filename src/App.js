import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCard: [],
  };

  validationFields = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    // const sumOfAttrs = cardAttr1 + cardAttr2 + cardAttr3;
    const maxAttrSum = 210;
    const valueAtt1 = Number(cardAttr1);
    const valueAtt2 = Number(cardAttr2);
    const valueAtt3 = Number(cardAttr3);
    const maxAttr = 90;
    const minAtt = 0;
    const valCardName = cardName.length > 0;
    const valcardDescription = cardDescription.length > 0;
    const valcardImage = cardImage.length > 0;
    const valcardRare = cardRare.length > 0;
    const valcardAttr1 = cardAttr1 <= maxAttr && cardAttr1 >= minAtt;
    const valcardAttr2 = cardAttr2 <= maxAttr && cardAttr2 >= minAtt;
    const valcardAttr3 = cardAttr3 <= maxAttr && cardAttr3 >= minAtt;
    const valAttrSum = (valueAtt1 + valueAtt2 + valueAtt3) <= maxAttrSum;

    this.setState({
      isSaveButtonDisabled: !(valCardName && valcardDescription && valcardImage
        && valcardRare && valcardAttr1 && valcardAttr2 && valcardAttr3 && valAttrSum),
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validationFields);
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;
    this.setState((prevState) => ({
      savedCard: [...prevState.savedCard, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }));
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
