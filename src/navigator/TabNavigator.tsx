import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from '../screens/home/HomeNavigator';
import {layoutColors} from '../themes/colors';
import HomeIcon from '../assets/icons/HomeIcon';
import {TabNavigatorParamList} from '../types/paramlists';

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontFamily: 'NotoSans-SemiBold',
    color: layoutColors.black,
  },
  backgroundWhite: {backgroundColor: layoutColors.white},
  backgroundLightBeige: {backgroundColor: layoutColors.black},
  tabBar: {
    backgroundColor: layoutColors.white,
    borderTopWidth: 0,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowRadius: 10,
    shadowColor: layoutColors.blue5,
    shadowOpacity: 0.1,
    elevation: 16,
  },
  tabBarItem: {paddingVertical: 5},
  tabBarLabel: {
    fontSize: 10,
    fontFamily: 'NotoSans-Bold',
  },
});

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.backgroundLightBeige}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveTintColor: layoutColors.blueMain,
        tabBarInactiveTintColor: layoutColors.blue4,
      }}>
      <Tab.Screen
        name={'HomeNavigator'}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <HomeIcon
              stroke={color}
              focused={focused}
              background={layoutColors.blue5}
            />
          ),
        }}
        component={HomeNavigator}
      />
    </Tab.Navigator>
  );
}
