import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATORS } from 'constants';
import React from 'react';
import SettingsNavigator from './SettingsNavigator';
import DashboardNavigator from './DashboardNavigator';
import ClientsNavigator from './ClientsNavigator';
import { Icon } from 'components';
import { COLORS } from 'styles';

const MainTabs = createBottomTabNavigator();

const TAB_BAR_OPTIONS = {
  showLabel: false,
  activeTintColor: COLORS.PRIMARY,
  inactiveTintColor: COLORS.GREY,
};

const DASHBOARD_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="stats" />,
};

const CLIENTS_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="list" />,
};

const SETTINGS_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="settings" />,
};

function MainNavigator() {
  return (
    <MainTabs.Navigator tabBarOptions={TAB_BAR_OPTIONS}>
      <MainTabs.Screen
        options={DASHBOARD_OPTIONS}
        name={NAVIGATORS.DASHBOARD}
        component={DashboardNavigator}
      />
      <MainTabs.Screen
        options={CLIENTS_OPTIONS}
        name={NAVIGATORS.CLIENTS}
        component={ClientsNavigator}
      />
      <MainTabs.Screen
        options={SETTINGS_OPTIONS}
        name={NAVIGATORS.SETTINGS}
        component={SettingsNavigator}
      />
    </MainTabs.Navigator>
  );
}

export default MainNavigator;
