import React, { useState } from 'react';
import { StyleSheet, View, TextInput, AsyncStorage } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import * as firebase from 'firebase';
import { useNetInfo } from "@react-native-community/netinfo";

// import DefaultText from '../components/defaultText';
import DefaultTextInput from '../components/defaultTextInput';

import Colors from '../constants/colors';


export default ListDetails = (props) => {
    const netInfo = useNetInfo();
    // const { listDataItem } = props.route.params;
    const listData = props.route.params.lists;
    const listDataItem = props.route.params.list;
    // console.log(listData);
    const [listTitleInput, setListTitleInput] = useState(listDataItem.item.listTitle);
    const [listDescriptionInput, setListDescriptionInput] = useState(listDataItem.item.listDescription);

    const onSwipeRight = (gestureState) => {
        setListDatabase();
        props.navigation.goBack();
    }

    // const onSwipe = (gestureName, gestureState) => {
    //     const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    //     switch (gestureName) {
    //         case SWIPE_RIGHT:
    //             break;

    //     }
    // }

    const setListDatabase = () => {
        // if (netInfo.isConnected) {
        //     firebase
        //         .database()
        //         .ref("lists/list" + listDataItem.item.id + "/listTitle").set(listTitleInput);
        //     firebase
        //         .database()
        //         .ref("lists/list" + listDataItem.item.id + "/listDescription").set(listDescriptionInput);
        // }
        AsyncStorage.multiGet(["listsKey"], (error, stores) => {
            stores.map(store => {
                let lists = JSON.parse(store[1]);
                lists.map(
                    list => {
                        if (list.id == listDataItem.item.id) {
                            list.listTitle = listTitleInput;
                            list.listDescription = listDescriptionInput;
                            AsyncStorage.multiSet([['listsKey', JSON.stringify(lists)]]);
                        }
                    }
                );
            });
        })
    }

    return (
        <GestureRecognizer
            style={styles.screen}
            // onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeRight={(state) => onSwipeRight(state)}>
            <SharedElement style={styles.listTitleContainer} id={listDataItem.item.id}>
                {/* <DefaultText style={{ fontSize: 20, marginLeft: 20 }} numberOfLines={2}>{listDataItem.item.listTitle}</DefaultText> */}
                <TextInput
                    style={{ fontSize: 20, marginLeft: 20, fontFamily: 'Maiandra GD' }}
                    onChangeText={(listTitleText) => setListTitleInput(listTitleText)}
                    multiline={true}>
                    {listDataItem.item.listTitle}
                </TextInput>
            </SharedElement>
            <TextInput
                style={styles.listDetails}
                onChangeText={(listDescriptionText) => setListDescriptionInput(listDescriptionText)}
                multiline={true}>
                {listDataItem.item.listDescription}
            </TextInput>
            {/* <DefaultText style={styles.listDetails}>{listDataItem.item.listDescription}</DefaultText> */}
        </GestureRecognizer>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 45,
        backgroundColor: '#fff',
        flex: 1,
    },
    listTitleContainer: {
        flex: 1,
        marginLeft: 30,
        justifyContent: 'flex-end',
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: Colors.primary,
        // backgroundColor: 'red',
    },
    listDetails: {
        flex: 4,
        marginLeft: 50,
        marginTop: 25,
        textAlignVertical: 'top',
        fontSize: 16,
        fontFamily: 'Maiandra GD',
        // backgroundColor: 'red',
    }
});