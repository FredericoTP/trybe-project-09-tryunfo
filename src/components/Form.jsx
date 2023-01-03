/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import '../style/Form.css';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <fieldset className="fieldset">
        <form className="form">
          <div className="field">
            <label htmlFor="name-input" className="form-label">
              Nome
            </label>
            <input
              maxLength="15"
              name="cardName"
              id="name-input"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              className="input-text"
            />
          </div>

          <div className="field">
            <label htmlFor="description-input" className="form-label">
              Descrição
            </label>
            <textarea
              name="cardDescription"
              id="description-input"
              data-testid="description-input"
              rows="5"
              value={ cardDescription }
              onChange={ onInputChange }
              className="form-textarea"
            />
          </div>

          <div className="attributes">
            <div className="field">
              <label htmlFor="attr1-input" className="form-label">
                Distância - anos-luz
              </label>
              <input
                name="cardAttr1"
                id="attr1-input"
                type="number"
                data-testid="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
                min="0"
                max="90"
                className="input-text"
              />
            </div>

            <div className="field">
              <label htmlFor="attr2-input" className="form-label">
                Tamanho - anos-luz
              </label>
              <input
                name="cardAttr2"
                id="attr2-input"
                type="number"
                data-testid="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
                min="0"
                max="90"
                className="input-text"
              />
            </div>

            <div className="field">
              <label htmlFor="attr3-input" className="form-label">
                Magnitude Aparente
              </label>
              <input
                name="cardAttr3"
                id="attr3-input"
                type="number"
                data-testid="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
                min="0"
                max="90"
                className="input-text"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="image-input" className="form-label">
              Imagem
            </label>
            <input
              name="cardImage"
              id="image-input"
              type="text"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              className="input-text"
            />
          </div>

          <div className="field">
            <label htmlFor="rare-input" className="form-label">
              Raridade
            </label>
            <select
              name="cardRare"
              id="rare-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              className="input-select"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </div>

          <div className="field-check">
            { hasTrunfo
              ? <p className="form-label">Você já tem um Super Trunfo em seu baralho</p>
              :
              <label className="form-label">
                <input
                  name="cardTrunfo"
                  id="trunfo-input"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  className="form-check-input"
                />
                Super Trunfo
              </label> }
          </div>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="btn"
          >
            Salvar
          </button>
        </form>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
