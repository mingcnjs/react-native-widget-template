import {NavigatorScreenParams} from '@react-navigation/native';

export type TabNavigatorParamList = {
  HomeNavigator: undefined;
};

export type HomeStackParamList = {
  TabNavigator: TabNavigatorParamList;
};

export type RootParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

export type HomeParamList = {
  HomeScreen: undefined;
};
