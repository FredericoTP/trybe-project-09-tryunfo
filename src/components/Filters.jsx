import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterName, onInputChange } = this.props;
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
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
