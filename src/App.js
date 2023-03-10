import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import CardList from './components/CardList';
import './style/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsCreated: [],
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
      isFilterNameDisabled: false,
      isFilterRareDisabled: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        filterTrunfo,
      } = this.state;

      const one = parseInt(cardAttr1, 10);
      const two = parseInt(cardAttr2, 10);
      const three = parseInt(cardAttr3, 10);
      const sum = one + two + three;
      const number = 210;
      const number2 = 90;

      const first = (
        cardName === '' || cardDescription === '' || cardImage === '' || cardRare === '');
      const second = sum > number;
      const third = (
        cardAttr1 < 0
        || cardAttr1 > number2
        || cardAttr2 < 0
        || cardAttr2 > number2
        || cardAttr3 < 0
        || cardAttr3 > number2
      );
      const newBtnState = first || second || third;
      const filter = filterTrunfo;
      this.setState({
        isSaveButtonDisabled: newBtnState,
        isFilterNameDisabled: filter,
        isFilterRareDisabled: filter,
      });
    });
  }

  onSaveButtonClick(event) {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    event.preventDefault();

    this.setState((prevState) => ({
      cardsCreated: [...prevState.cardsCreated, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    }));

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  deleteCard({ target }) {
    const { cardsCreated } = this.state;
    const { name } = target;
    const toNumber = parseInt(name, 10);

    this.setState({
      cardsCreated: cardsCreated.filter((card, index) => index !== toNumber),
    });

    cardsCreated.forEach((card) => {
      if (card.cardTrunfo) {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardsCreated,
      filterName,
      filterRare,
      filterTrunfo,
      isFilterNameDisabled,
      isFilterRareDisabled,
    } = this.state;
    return (
      <div className="main-content">
        <header>
          <h1>SpaceTryunfo</h1>
        </header>
        <div className="form-preview">
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

        <div className="filters-list-card">
          <h2>TODAS AS CARTAS</h2>

          <Filters
            filterName={ filterName }
            filterRare={ filterRare }
            filterTrunfo={ filterTrunfo }
            isFilterNameDisabled={ isFilterNameDisabled }
            isFilterRareDisabled={ isFilterRareDisabled }
            onInputChange={ this.onInputChange }
          />
          <div className="list-cards">
            <CardList
              cardsCreated={ cardsCreated }
              deleteCard={ this.deleteCard }
              filterName={ filterName }
              filterRare={ filterRare }
              filterTrunfo={ filterTrunfo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
