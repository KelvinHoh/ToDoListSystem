import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import DefaultText from '../components/defaultText';

export default ListDetails = (props) => {
    const { listDataItem } = props.route.params;
    return (
        <View style={styles.screen}>
            <SharedElement id={listDataItem.item.id}>
                <DefaultText style={styles.listTitle}>{listDataItem.item.listTitle}</DefaultText>
            </SharedElement>
            <DefaultText style={styles.listDetails}>{listDataItem.item.listDescription}</DefaultText>
            <Button title="bye-bye" onPress={() => props.navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 45,
        backgroundColor: '#fff',
        flex: 1,
    },
    listTitle: {
        height: '20%',
        marginLeft: 30,
        fontSize: 20,
    },
    listDetails: {
        height: '75%',
        marginLeft: 30,
    }
});