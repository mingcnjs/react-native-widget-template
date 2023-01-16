import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils/rootNavigation';

type Props = {
  children: ReactNode;
};

const Container = ({children}: Props) => {
  return (
    <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
  );
};

export default Container;
