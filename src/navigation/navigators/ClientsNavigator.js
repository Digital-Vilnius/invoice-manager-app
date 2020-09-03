import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { ClientsScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const ClientsStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function ClientsNavigator() {
  return (
    <ClientsStack.Navigator screenOptions={OPTIONS}>
      <ClientsStack.Screen
        options={{ title: 'Clients' }}
        name={SCREENS.CLIENTS}
        component={ClientsScreen}
      />
    </ClientsStack.Navigator>
  );
}

export default ClientsNavigator;
