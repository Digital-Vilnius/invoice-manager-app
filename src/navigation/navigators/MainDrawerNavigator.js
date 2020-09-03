import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import SettingsNavigator from './SettingsNavigator';
import { NAVIGATORS } from 'constants';
import DashboardNavigator from './DashboardNavigator';
import ClientsNavigator from './ClientsNavigator';
import InvoicesNavigator from './InvoicesNavigator';
import { DrawerContent } from 'containers';
import { COLORS } from 'styles';

const Drawer = createDrawerNavigator();

const DRAWER_STYLE = {
  width: 320,
  inactiveTintColor: COLORS.RED,
};

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      drawerStyle={DRAWER_STYLE}>
      <Drawer.Screen
        name={NAVIGATORS.DASHBOARD}
        component={DashboardNavigator}
      />
      <Drawer.Screen name={NAVIGATORS.INVOICES} component={InvoicesNavigator} />
      <Drawer.Screen name={NAVIGATORS.CLIENTS} component={ClientsNavigator} />
      <Drawer.Screen name={NAVIGATORS.SETTINGS} component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
