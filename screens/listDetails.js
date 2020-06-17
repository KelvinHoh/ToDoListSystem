import React from 'react';
import { StyleSheet, View } from 'react-native';

import DefaultText from '../components/defaultText';

export default ListDetails = () => {
    return (
        <View style={styles.screen}>
            <DefaultText>Hello</DefaultText>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 45,
        backgroundColor: '#fff',
        flex: 1,
    },
});