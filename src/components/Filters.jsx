import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterName, filterRare, onInputChange } = this.props;
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
        />
        <label htmlFor="rare-filter">
          Raridade
          <select
            name="filterRare"
            id="rare-filter"
            data-testid="rare-filter"
            value={ filterRare }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
