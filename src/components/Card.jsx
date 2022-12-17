/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import '../style/Card.css';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div className="game-card">
        <div className="name-card">
          <p className="card-name-p" data-testid="name-card">{ cardName }</p>
        </div>
        <div className="image-card">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <div className="description-card">
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div className="attr">
          <div>
            <p className="attr-name">Distância * 1000al </p>
            <p data-testid="attr1-card" className="attr-number">{ cardAttr1 }</p>
          </div>
          <div>
            <p className="attr-name">Tamanho - al </p>
            <p data-testid="attr2-card" className="attr-number">{ cardAttr2 }</p>
          </div>
          <div>
            <p className="attr-name">Magnitude Aparente</p>
            <p data-testid="attr3-card" className="attr-number">{ cardAttr3 }</p>
          </div>
        </div>
        <div className="rarity">
          <div className="trunfo">
            {
              cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p data-testid="rare-card" className="rare">{ cardRare }</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
