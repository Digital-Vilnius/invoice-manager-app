import React from 'react';
import { ViewPropTypes } from 'react-native';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import {
  Container,
  Title,
  Description,
  LeftSection,
  Details,
  RightSection,
  AmountText,
} from './styles';

function ClientsItem(props) {
  const { client, style, onPress, onLongPress } = props;
  const { name, code } = client;

  return (
    <Container
      disabled
      onLongPress={onLongPress}
      onPress={onPress}
      style={style}>
      <LeftSection>
        <Avatar placeholder={name.substring(0, 2)} size={40} />
        <Details>
          <Title>{name}</Title>
          <Description>{code}</Description>
        </Details>
      </LeftSection>
      <RightSection>
        <AmountText>2000.00 $</AmountText>
      </RightSection>
    </Container>
  );
}

ClientsItem.propTypes = {
  client: SharedTypes.ClientType.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
};

ClientsItem.defaultProps = {
  style: {},
  onPress: () => {},
  onLongPress: () => {},
};

export default ClientsItem;
