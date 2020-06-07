import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default SecondaryText = ({ children, style }) => {
    return (
        <Text style={{ ...styles.secondaryFont, ...style }}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    secondaryFont: {
        fontFamily: 'Freestyle Script',
    }
});