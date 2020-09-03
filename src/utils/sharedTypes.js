import PropTypes from 'prop-types';

const BaseType = {
  id: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string,
};

const LoggedUserType = PropTypes.shape({
  ...BaseType,
  email: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
});

const AccountType = PropTypes.shape({
  ...BaseType,
  code: PropTypes.string.isRequired,
  vatCode: PropTypes.string,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

const AccountsListItemType = PropTypes.shape({
  ...BaseType,
  code: PropTypes.string.isRequired,
  vatCode: PropTypes.string,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

const ClientType = PropTypes.shape({
  ...BaseType,
  name: PropTypes.string.isRequired,
  vatCode: PropTypes.string,
  code: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
});

const ClientsFilter = PropTypes.shape({
  keyword: PropTypes.string,
});

const QuickFilter = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export {
  ClientType,
  AccountType,
  ClientsFilter,
  QuickFilter,
  AccountsListItemType,
  LoggedUserType,
};
