import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, Button } from 'react-native';

import DefaultText from './components/DefaultText';
import SecondaryText from './components/SecondaryText';

import Colors from './constants/colors';

export default function App() {

  const [listData, setListData] = useState([
    { id: "1", listTitle: "Cook Something For Dinner (Elijah, Jozhua, Chun Wei)", listDetails: "Hello Guys", listDate: "12/06" },
    { id: "2", listTitle: "Cook Something For Dinner (Elijah, Jozhua, Chun Wei)", listDetails: "Hello Guys", listDate: "12/06" },
  ]);

  const [defaultFont] = useFonts({
    'Maiandra GD': require('./assets/fonts/Maiandra GD Regular.ttf'),
  });

  const [secondaryFont] = useFonts({
    'Freestyle Script': require('./assets/fonts/freescpt.ttf'),
  });

  const addNewList = () => {
    console.log(listData);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.lists}>
        {/* <FlatList
          data={listData}
          keyExtractor={listDataItem => listDataItem.id}
          renderItem={listDataItem => (
            <View style={styles.list}>
              <Image style={styles.listButton} source={require('./assets/normalbutton.png')} />
              <TouchableOpacity style={styles.listTitle}>
                <DefaultText style={styles.listText}>{listDataItem.item.listTitle}</DefaultText>
                <SecondaryText style={styles.listDate}>{listDataItem.item.listDate}</SecondaryText>
              </TouchableOpacity>
            </View>
          )}
        /> */}
        <View style={styles.list}>
          <Image style={styles.listButton} source={require('./assets/normalbutton.png')} />
          <TouchableOpacity style={styles.listTitle}>
            <DefaultText style={styles.listText}>Hello</DefaultText>
            <SecondaryText style={styles.listDate}>Hello</SecondaryText>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Image style={styles.listButton} source={require('./assets/normalbutton.png')} />
          <TouchableOpacity style={styles.listTitle}>
            <DefaultText style={styles.listText}>Hello</DefaultText>
            <SecondaryText style={styles.listDate}>Hello</SecondaryText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity activeOpacity={.6} style={[styles.menuButton, styles.menuButtonActive]}>
          <Image style={styles.listButton} source={require('./assets/normalbutton.png')} />
          <DefaultText style={styles.menuButtonText}>Normal</DefaultText>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.6} style={styles.menuButton}>
          <Image style={styles.listButton} source={require('./assets/normalbutton.png')} />
          <DefaultText style={styles.menuButtonText}>Important</DefaultText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addListButtonContainer} onPress={addNewList}>
        <Image style={styles.addListButton} source={require('./assets/logo.png')} />
      </TouchableOpacity>
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
    height: '91%',
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
  menuButtonContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  menuButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  menuButtonText: {
    fontSize: 14,
  },
  menuButtonActive: {
    backgroundColor: Colors.secondary,
  },
  addListButtonContainer: {
    position: 'absolute',
    right: 25,
    bottom: 75,
    borderWidth: 2,
    borderRadius: 50,
    padding: 15,
    borderColor: Colors.tertiary,
  },
  addListButton: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  }
});
