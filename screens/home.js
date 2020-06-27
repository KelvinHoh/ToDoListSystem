import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, FlatList, AsyncStorage } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import * as firebase from 'firebase';

import DefaultText from '../components/defaultText';
import SecondaryText from '../components/secondaryText';

import Colors from '../constants/colors';

export default Home = ({ navigation }) => {

    // const fadeAnim = useRef(new Animated.Value(0)).current;

    // const fadeIn = () => {
    //     Animated.timing(fadeAnim, {
    //         toValue: 1,
    //         duration: 2000
    //     }).start();
    // }

    const [listData, setListData] = useState([
        // { id: "1", listTitle: "Cook Something For Dinner (Elijah, Jozhua, Chun Wei)", listDescription: "Hello Guys", listDate: "12/06" },
        // { id: "2", listTitle: "Cook Something For Dinner (Bryan, Jozhua, Chun Wei)", listDescription: "Hello Guys", listDate: "12/06" },
    ]);

    const addNewList = async () => {
        // console.log(netInfo.isConnected);
        // console.log(listData);
        // const items = [['k1', JSON.stringify(listData)]];
        // AsyncStorage.multiSet(items);
        // AsyncStorage.multiSet([['listsKey', JSON.stringify(listData)]]);
        // console.log(listData);
        // await AsyncStorage.multiGet(["lists"]).then(response => {
        //     console.log(JSON.parse(response[0][1]));
        //     // console.log(JSON.parse(response[0][1])[1].listDescription);
        // })
        // AsyncStorage.multiSet([['lists', JSON.stringify(listData)]]);

        // console.log(listData);
    }

    // const retrieveList = () => {
    //     firebase
    //         .database()
    //         .ref("lists/")
    //         .on("value", snapshot => {
    //             // console.log(snapshot.val())
    //             snapshot.forEach(list => {
    //                 setListData(listData => [...listData, { id: list.val().id, listTitle: list.val().listTitle }]);
    //             })
    //         });
    // }

    useEffect(() => {
        // firebase
        //     .database()
        //     .ref("lists/")
        //     .on("value", snapshot => {
        //         setListData([]);
        //         snapshot.forEach(list => {
        //             setListData(listData =>
        //                 [...listData,
        //                 {
        //                     id: list.val().id,
        //                     listTitle: list.val().listTitle,
        //                     listDate: list.val().listDate,
        //                     listDescription: list.val().listDescription
        //                 }]);
        //         })
        //     });
        AsyncStorage.multiGet(["listsKey"], (error, stores) => {
            stores.map(store => {
                let lists = store[1];
                JSON.parse(lists).map(
                    list => {
                        setListData(listData =>
                            [...listData,
                            {
                                id: list.id,
                                listTitle: list.listTitle,
                                listDate: list.listDate,
                                listDescription: list.listDescription
                            }]);
                    }
                );
            });
        })
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.lists}>
                <FlatList
                    data={listData}
                    keyExtractor={listDataItem => listDataItem.id}
                    renderItem={listDataItem => (
                        <View style={styles.list}>
                            <TouchableOpacity>
                                <Image style={styles.listButton} source={require('../assets/normalbutton.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listTitle} onPress={() => navigation.navigate("ListDetails", { lists: listData, list: listDataItem })}>
                                <SharedElement style={styles.listTextContainer} id={listDataItem.item.id}>
                                    <DefaultText style={{ fontSize: 16 }} numberOfLines={1}>{listDataItem.item.listTitle}</DefaultText>
                                </SharedElement>
                                <SecondaryText style={styles.listDate}>{listDataItem.item.listDate}</SecondaryText>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <View style={styles.menuButtonContainer}>
                <TouchableOpacity activeOpacity={.6} style={[styles.menuButton, styles.menuButtonActive]}>
                    <Image style={styles.listButton} source={require('../assets/normalbutton.png')} />
                    <DefaultText style={styles.menuButtonText}>Normal</DefaultText>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.6} style={styles.menuButton}>
                    <Image style={styles.listButton} source={require('../assets/importantbutton.png')} />
                    <DefaultText style={styles.menuButtonText}>Important</DefaultText>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addListButtonContainer} onPress={addNewList}>
                <Image style={styles.addListButton} source={require('../assets/logo.png')} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 45,
        backgroundColor: '#fff',
        flex: 1,
    },
    lists: {
        height: '91%',
    },
    list: {
        flexDirection: 'row',
        //* height weirdly influences the items in FlatList
        // height: '30%',
        // backgroundColor: 'red',
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
    listTextContainer: {
        flex: 1,
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
