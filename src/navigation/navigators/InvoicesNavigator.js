import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { InvoicesScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const InvoicesStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function InvoicesNavigator() {
  return (
    <InvoicesStack.Navigator screenOptions={OPTIONS}>
      <InvoicesStack.Screen
        options={{ title: 'Invoices' }}
        name={SCREENS.INVOICES}
        component={InvoicesScreen}
      />
    </InvoicesStack.Navigator>
  );
}

export default InvoicesNavigator;
