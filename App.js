import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import DefaultText from './components/DefaultText';
import SecondaryText from './components/SecondaryText';

import Colors from './constants/colors';

export default function App() {

  let [defaultFont] = useFonts({
    'Maiandra GD': require('./assets/fonts/Maiandra GD Regular.ttf'),
  });

  let [secondaryFont] = useFonts({
    'Freestyle Script': require('./assets/fonts/freescpt.ttf'),
  });

  return (
    <View style={styles.screen}>
      <View style={styles.lists}>
        <View style={styles.list}>
          <Image style={styles.listButton} source={require('./assets/normalbutton.png')} />
          <TouchableOpacity style={styles.listTitle}>
            <DefaultText style={styles.listText}>Cook Something For Dinner (Elijah, Jozhua, Chun Wei)</DefaultText>
            <SecondaryText style={styles.listDate}>12/06</SecondaryText>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Text style={styles.listButton}>O</Text>
          <TouchableOpacity style={styles.listTitle}>
            <DefaultText style={styles.listText}>Cook Something</DefaultText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={.6} style={[styles.button, styles.buttonActive]}>
          <DefaultText style={styles.buttonText}>Normal</DefaultText>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.6} style={styles.button}>
          <DefaultText style={styles.buttonText}>Important</DefaultText>
        </TouchableOpacity>
        {/* <Button style={styles.button} title="Normal" />
        <Button style={styles.button} title="Important" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 45,
    backgroundColor: '#fff',
    flex: 1,
  },
  lists: {
    height: '92%',
  },
  list: {
    flexDirection: 'row',
    height: '5%',
    marginVertical: 15,
  },
  listButton: {
    marginHorizontal: 20,
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  listTitle: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
  listDate: {
    fontSize: 16,
    marginHorizontal: 8,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontSize: 14,
  },
  buttonActive: {
    backgroundColor: Colors.secondary,
  }
});
