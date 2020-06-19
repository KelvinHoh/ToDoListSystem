import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase';

import Home from './screens/home';
import ListDetails from './screens/listDetails';

var firebaseConfig = {
  apiKey: "AIzaSyDxFDRiwoPKD2nCZ-sAxWZtxiozqXjWZ-A",
  authDomain: "todolistsystem-cf6a3.firebaseapp.com",
  databaseURL: "https://todolistsystem-cf6a3.firebaseio.com",
  projectId: "todolistsystem-cf6a3",
  storageBucket: "todolistsystem-cf6a3.appspot.com",
  messagingSenderId: "822452312158",
  appId: "1:822452312158:web:9497aec3aa88a98ef7fccf"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

const Stack = createSharedElementStackNavigator();

const retrieveFonts = () => Font.loadAsync({
  'Maiandra GD': require('./assets/fonts/Maiandra GD Regular.ttf'),
  'Freestyle Script': require('./assets/fonts/freescpt.ttf'),
});

export default function App() {

  const [fontsLoaded, setFontsLoadingStatus] = useState(false);

  const forFade = ({ current, next, layouts }) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        }],
    }
  })

  // const forFade = ({ current }) => ({
  //   cardStyle: {
  //     opacity: current.progress
  //   }
  // })

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
                animation: 'fade',
                // resize: 'none',
              }];
            }}
            options={{ cardStyleInterpolator: forFade }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={retrieveFonts}
        onFinish={() => setFontsLoadingStatus(true)
        }
      />
    );
  }

}