import React, { useState } from 'react';
import { Footer } from './styles';
import { Button, Modal, OptionsItem } from 'components';
import PropTypes from 'prop-types';
import { BUTTONS, Form, Grid } from 'styles';
import { ViewPropTypes } from 'react-native';
import { ClientsService } from 'services';
import Clients from '../Clients';

function ClientSelect(props) {
  const { onChange, value, name, style, disabled, label, placeholder } = props;
  const [visible, setVisible] = useState(false);
  const [client, setClient] = useState(value);

  const select = () => {
    setVisible(false);
    onChange({ name, value: client.id });
  };

  const renderItem = item => (
    <OptionsItem
      selected={item.id === client?.id}
      description={item.description}
      onPress={() => setClient(item.id === client?.id ? null : item)}
      key={item.id}
      title={item.title}
    />
  );

  const renderValue = () => {
    if (value) {
      const title = ClientsService.findItemById(value)?.title;
      return <Form.Value>{title}</Form.Value>;
    }

    if (placeholder) {
      return <Form.Placeholder>{placeholder}</Form.Placeholder>;
    }

    return null;
  };

  return (
    <Form.Container style={style}>
      <Form.Select disabled={disabled} onPress={() => setVisible(true)}>
        <Form.Label>{label}</Form.Label>
        {renderValue()}
      </Form.Select>
      <Modal
        onClose={() => setVisible(false)}
        title="Select client"
        visible={visible}>
        <Clients renderItem={renderItem} />
        <Footer>
          <Grid.Row center mb={10}>
            <Button disabled={!client} onPress={select} title="Select" />
          </Grid.Row>
          <Grid.Row>
            <Button
              type={BUTTONS.SECONDARY}
              outline
              title="Cancel"
              onPress={() => setVisible(false)}
            />
          </Grid.Row>
        </Footer>
      </Modal>
    </Form.Container>
  );
}

ClientSelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

ClientSelect.defaultProps = {
  style: {},
  value: null,
  placeholder: null,
  disabled: false,
};

export default ClientSelect;
