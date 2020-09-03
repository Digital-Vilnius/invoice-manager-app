import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { ClientsItem, List } from 'components';
import { connect } from 'react-redux';
import { ClientsActions } from 'actions';

function Clients(props) {
  const {
    style,
    clients,
    isRefreshing,
    count,
    getClients,
    refreshClients,
    isLoading,
    filter,
    renderItem,
  } = props;

  return (
    <Container style={style}>
      <List
        filter={filter}
        isLoading={isLoading}
        count={count}
        getFunction={getClients}
        isRefreshing={isRefreshing}
        refreshFunction={refreshClients}
        data={clients}
        renderItem={renderItem}
      />
    </Container>
  );
}

Clients.propTypes = {
  renderItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getClients: PropTypes.func.isRequired,
  refreshClients: PropTypes.func.isRequired,
  clients: PropTypes.arrayOf(SharedTypes.ClientType).isRequired,
  filter: SharedTypes.ClientsFilter,
};

Clients.defaultProps = {
  style: {},
  renderItem: item => <ClientsItem key={item.id} client={item} />,
};

function mapStateToProps(state) {
  const { clients } = state;
  const { count, isLoading, isRefreshing } = clients;
  return { clients: clients.clients, isLoading, count, isRefreshing };
}

const mapDispatchToProps = {
  getClients: ClientsActions.getClients,
  refreshClients: ClientsActions.refreshClients,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clients);
