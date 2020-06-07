import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.screen}>
      <View style={styles.lists}>
        <View style={styles.list}>
          <Text style={styles.listButton}>O</Text>
          <TouchableOpacity style={styles.listTitle}>
            <Text style={{ marginLeft: 10 }}>Cook Something</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Text style={styles.listButton}>O</Text>
          <TouchableOpacity style={styles.listTitle}>
            <Text style={{ marginLeft: 10 }}>Cook Something</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={.6} style={[styles.button, styles.buttonActive]}>
          <Text>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.6} style={styles.button}>
          <Text>Important</Text>
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
    fontSize: 12,
    height: '5%',
    marginVertical: 15,
  },
  listButton: {
    marginHorizontal: 25,
  },
  listTitle: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#BDBDBD',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
  },
  buttonActive: {
    backgroundColor: '#DADADA',
  }
});
