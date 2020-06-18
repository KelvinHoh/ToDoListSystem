import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home';
import ListDetails from './screens/listDetails';

// import Route from './route';

const Stack = createSharedElementStackNavigator();

const retrieveFonts = () => Font.loadAsync({
  'Maiandra GD': require('./assets/fonts/Maiandra GD Regular.ttf'),
  'Freestyle Script': require('./assets/fonts/freescpt.ttf'),
});

export default function App() {

  const [fontsLoaded, setFontsLoadingStatus] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="ListDetails"
            component={ListDetails}
            sharedElementsConfig={(route, otherRoute, showing) => {
              const { listDataItem } = route.params;
              return [{
                id: listDataItem.item.id,
                resize: 'auto',
              }];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={retrieveFonts}
        onFinish={() => setFontsLoadingStatus(true)}
      />
    );
  }

}