import React from 'react';
import Form from '../Form';
import autoBind from 'auto-bind';
import { Button, Input } from 'components';
import { Container, Content, Footer } from './styles';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import _ from 'lodash';
import { BUTTONS, Grid } from 'styles';

class ClientForm extends Form {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name: { value: null, error: null, dirty: false },
        code: { value: null, error: null, dirty: false },
        vatCode: { value: null, error: null, dirty: false },
        address: { value: null, error: null, dirty: false },
        email: { value: null, error: null, dirty: false },
        phone: { value: null, error: null, dirty: false },
      },
    };

    autoBind(this);
  }

  componentDidMount() {
    this.validateForm();
  }

  componentDidUpdate(prevProps) {
    const { formData } = this.props;
    if (!_.isEqual(prevProps.formData, formData) && formData) {
      this.setForm(formData);
    }
  }

  setForm(formData) {
    this.setState(
      state =>
        update(state, {
          fields: {
            name: { value: { $set: formData.name } },
            code: { value: { $set: formData.code } },
            vatCode: { value: { $set: formData.vatCode } },
            address: { value: { $set: formData.address } },
            email: { value: { $set: formData.email } },
            phone: { value: { $set: formData.phone } },
          },
        }),
      () => this.validateForm(),
    );
  }

  save() {
    const { fields } = this.state;
    const { onSubmit } = this.props;

    if (this.validateForm()) {
      onSubmit({
        name: fields.name.value,
        code: fields.code.value,
        vatCode: fields.vatCode.value,
        address: fields.address.value,
        email: fields.email.value,
        phone: fields.phone.value,
      });
    }
  }

  render() {
    const { fields } = this.state;
    const { style, isLoading, onCancel } = this.props;

    return (
      <Container style={style}>
        <Content>
          <Input
            value={fields.name.value}
            onChange={this.handleChange}
            placeholder="Enter client name"
            label="Name"
            name="name"
          />
          <Input
            value={fields.code.value}
            onChange={this.handleChange}
            placeholder="Enter client code"
            label="Code"
            name="code"
          />
          <Input
            value={fields.vatCode.value}
            onChange={this.handleChange}
            placeholder="Enter client VAT code"
            label="VAT code"
            name="vatCode"
          />
          <Input
            value={fields.address.value}
            onChange={this.handleChange}
            placeholder="Enter client address"
            label="Address"
            name="address"
          />
          <Input
            value={fields.email.value}
            onChange={this.handleChange}
            placeholder="Enter client email"
            label="Email"
            name="email"
          />
          <Input
            value={fields.phone.value}
            onChange={this.handleChange}
            placeholder="Enter client phone"
            label="Phone"
            name="phone"
          />
        </Content>
        <Footer>
          <Grid.Row mb={10}>
            <Button
              disabled={this.hasErrors()}
              title="Save"
              isLoading={isLoading}
              onPress={this.save}
            />
          </Grid.Row>
          <Grid.Row>
            <Button
              type={BUTTONS.SECONDARY}
              outline
              title="Cancel"
              onPress={onCancel}
            />
          </Grid.Row>
        </Footer>
      </Container>
    );
  }
}

ClientForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  style: ViewPropTypes.style,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    vatCode: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
};

ClientForm.defaultProps = {
  style: {},
  onCancel: () => {},
  isLoading: false,
  formData: null,
};

export default ClientForm;
