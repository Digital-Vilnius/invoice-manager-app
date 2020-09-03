import React, { useState } from 'react';
import { Clients } from 'containers';
import { Header } from './styles';
import { Input, ScreenContainer } from 'components';
import PropTypes from 'prop-types';
import * as _ from 'lodash';

function ClientsScreen(props) {
  const [filter, setFilter] = useState({});

  const search = ({ value }) => {
    setFilter({ ...filter, keyword: value });
  };

  const onSearchChange = _.debounce(search, 500);

  return (
    <ScreenContainer>
      <Header>
        <Input
          dark
          leftIcon="search"
          placeholder="Search by keyword"
          onChange={onSearchChange}
          name="keyword"
        />
      </Header>
      <Clients filter={filter} />
    </ScreenContainer>
  );
}

ClientsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ClientsScreen;
