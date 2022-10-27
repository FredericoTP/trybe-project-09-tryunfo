import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const {
      cardsCreated,
      deleteCard,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.props;
    return (
      <div>
        <ul>
          { cardsCreated.map((card, index) => {
            const {
              cardName: name,
              cardDescription: description,
              cardAttr1: attr1,
              cardAttr2: attr2,
              cardAttr3: attr3,
              cardImage: image,
              cardRare: rare,
              cardTrunfo: trunfo,
            } = card;

            if (filterTrunfo && trunfo) {
              return (
                <li key={ `${name}-${index}` }>
                  <Card
                    key={ name }
                    cardName={ name }
                    cardDescription={ description }
                    cardAttr1={ attr1 }
                    cardAttr2={ attr2 }
                    cardAttr3={ attr3 }
                    cardImage={ image }
                    cardRare={ rare }
                    cardTrunfo={ trunfo }
                  />
                  <button
                    name={ index }
                    data-testid="delete-button"
                    type="button"
                    onClick={ deleteCard }
                  >
                    Excluir
                  </button>
                </li>
              );
            }

            if (filterName === '' && filterRare === 'todas' && !filterTrunfo) {
              return (
                <li key={ `${name}-${index}` }>
                  <Card
                    key={ name }
                    cardName={ name }
                    cardDescription={ description }
                    cardAttr1={ attr1 }
                    cardAttr2={ attr2 }
                    cardAttr3={ attr3 }
                    cardImage={ image }
                    cardRare={ rare }
                    cardTrunfo={ trunfo }
                  />
                  <button
                    name={ index }
                    data-testid="delete-button"
                    type="button"
                    onClick={ deleteCard }
                  >
                    Excluir
                  </button>
                </li>
              );
            }

            if (filterName === '' && rare === filterRare && !filterTrunfo) {
              return (
                <li key={ `${name}-${index}` }>
                  <Card
                    key={ name }
                    cardName={ name }
                    cardDescription={ description }
                    cardAttr1={ attr1 }
                    cardAttr2={ attr2 }
                    cardAttr3={ attr3 }
                    cardImage={ image }
                    cardRare={ rare }
                    cardTrunfo={ trunfo }
                  />
                  <button
                    name={ index }
                    data-testid="delete-button"
                    type="button"
                    onClick={ deleteCard }
                  >
                    Excluir
                  </button>
                </li>
              );
            }

            if (filterName !== ''
              && name.includes(filterName)
              && filterRare === 'todas') {
              return (
                <li key={ `${name}-${index}` }>
                  <Card
                    key={ name }
                    cardName={ name }
                    cardDescription={ description }
                    cardAttr1={ attr1 }
                    cardAttr2={ attr2 }
                    cardAttr3={ attr3 }
                    cardImage={ image }
                    cardRare={ rare }
                    cardTrunfo={ trunfo }
                  />
                  <button
                    name={ index }
                    data-testid="delete-button"
                    type="button"
                    onClick={ deleteCard }
                  >
                    Excluir
                  </button>
                </li>
              );
            }

            if (filterName !== ''
              && name.includes(filterName)
              && filterRare === rare) {
              return (
                <li key={ `${name}-${index}` }>
                  <Card
                    key={ name }
                    cardName={ name }
                    cardDescription={ description }
                    cardAttr1={ attr1 }
                    cardAttr2={ attr2 }
                    cardAttr3={ attr3 }
                    cardImage={ image }
                    cardRare={ rare }
                    cardTrunfo={ trunfo }
                  />
                  <button
                    name={ index }
                    data-testid="delete-button"
                    type="button"
                    onClick={ deleteCard }
                  >
                    Excluir
                  </button>
                </li>
              );
            }

            return ('');
          }) }
        </ul>
      </div>
    );
  }
}

CardList.propTypes = {
  cardsCreated: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
  deleteCard: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default CardList;
