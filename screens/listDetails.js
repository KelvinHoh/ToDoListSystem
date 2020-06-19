import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import DefaultText from '../components/defaultText';

import Colors from '../constants/colors';

export default ListDetails = (props) => {
    const { listDataItem } = props.route.params;

    const onSwipeRight = (gestureState) => {
        props.navigation.goBack();
    }

    // const onSwipe = (gestureName, gestureState) => {
    //     const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    //     switch (gestureName) {
    //         case SWIPE_RIGHT:
    //             break;

    //     }
    // }

    return (
        <GestureRecognizer
            style={styles.screen}
            // onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeRight={(state) => onSwipeRight(state)}>
            <SharedElement style={styles.listTitleContainer} id={listDataItem.item.id}>
                <DefaultText style={{ fontSize: 20, marginLeft: 20 }} numberOfLines={2}>{listDataItem.item.listTitle}</DefaultText>
            </SharedElement>
            <DefaultText style={styles.listDetails}>{listDataItem.item.listDescription}</DefaultText>
        </GestureRecognizer >
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
        fontSize: 16,
        // backgroundColor: 'red',
    }
});