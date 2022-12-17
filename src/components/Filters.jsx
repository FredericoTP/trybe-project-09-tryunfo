/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import '../style/Filters.css';

class Filters extends React.Component {
  render() {
    const {
      filterName,
      filterRare,
      filterTrunfo,
      onInputChange,
      isFilterNameDisabled,
      isFilterRareDisabled,
    } = this.props;
    return (
      <div className="filters">
        <h3>Filtros de Busca</h3>
        <input
          name="filterName"
          value={ filterName }
          data-testid="name-filter"
          type="text"
          placeholder="Nome da carta"
          onChange={ onInputChange }
          disabled={ isFilterNameDisabled }
          className="text-input"
        />

        <div>
          <label htmlFor="rare-filter" className="form-label label-select">
            Raridade
          </label>
          <select
            name="filterRare"
            id="rare-filter"
            data-testid="rare-filter"
            value={ filterRare }
            onChange={ onInputChange }
            disabled={ isFilterRareDisabled }
            className="select-input"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>

        <div>
          <input
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
            data-testid="trunfo-filter"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
          <label htmlFor="filterTrunfo" className="form-label label-check">
            Super Trunfo
          </label>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isFilterNameDisabled: PropTypes.bool.isRequired,
  isFilterRareDisabled: PropTypes.bool.isRequired,
};

export default Filters;
