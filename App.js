import React, { useState } from 'react';
import Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home';
import ListDetails from './screens/listDetails';

// import Route from './route';

const Stack = createStackNavigator();

const retrieveFonts = () => Font.loadAsync({
  'Maiandra GD': require('./assets/fonts/Maiandra GD Regular.ttf'),
  'Freestyle Script': require('./assets/fonts/freescpt.ttf'),
});

export default function App() {

  const [listData, setListData] = useState([
    { id: "1", listTitle: "Cook Something For Dinner (Elijah, Jozhua, Chun Wei)", listDetails: "Hello Guys", listDate: "12/06" },
    { id: "2", listTitle: "Cook Something For Dinner (Bryan, Jozhua, Chun Wei)", listDetails: "Hello Guys", listDate: "12/06" },
  ]);

  const [fontsLoaded, setFontsLoadingStatus] = useState(false);

  if (fontsLoaded) {
    return (
      // <Route />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {/* <Stack.Screen name="Home" component={Home} /> */}
          <Stack.Screen name="ListDetails" component={ListDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      // <Home />
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