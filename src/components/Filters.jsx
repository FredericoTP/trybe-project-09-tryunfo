import React from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <h3>Filtros de Busca</h3>

        <input
          name="filterName"
          value={ filterName }
          data-testid="name-filter"
          type="text"
          placeholder="Nome da carta"
          onChange={ onInputChange }
          disabled={ isFilterNameDisabled }
        />

        <label htmlFor="rare-filter">
          Raridade
          <select
            name="filterRare"
            id="rare-filter"
            data-testid="rare-filter"
            value={ filterRare }
            onChange={ onInputChange }
            disabled={ isFilterRareDisabled }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="filterTrunfo">
          <input
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
            data-testid="trunfo-filter"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>
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
