import React from 'react';
import {EventProvider} from 'react-native-outside-press';
import Container from './src/Container';
import RootNavigator from './src/RootNavigator';

function App(): JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <EventProvider style={{flex: 1}}>
      <Container>
        <RootNavigator />
      </Container>
    </EventProvider>
  );
}

export default App;
