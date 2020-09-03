import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Description,
  LeftSection,
  Details,
  RightSection,
} from './styles';
import { ViewPropTypes } from 'react-native';
import Avatar from '../Avatar';
import Checkbox from '../Checkbox';

function OptionsItem(props) {
  const {
    title,
    style,
    onPress,
    disabled,
    description,
    selected,
    placeholder,
  } = props;

  return (
    <Container disabled={disabled} onPress={onPress} style={style}>
      <LeftSection>
        <Avatar placeholder={placeholder} size={40} />
        <Details>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Details>
      </LeftSection>
      <RightSection>
        <Checkbox disabled checked={selected} />
      </RightSection>
    </Container>
  );
}

OptionsItem.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  description: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
};

OptionsItem.defaultProps = {
  style: {},
  placeholder: 'VS',
  selected: false,
  disabled: false,
};

export default OptionsItem;
