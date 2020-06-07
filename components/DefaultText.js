import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default DefaultText = ({ children, style }) => {
    return (
        <Text style={{ ...styles.defaultFont, ...style }} numberOfLines={1} ellipsizeMode="tail">{children}</Text>
    );
}

const styles = StyleSheet.create({
    defaultFont: {
        fontFamily: 'Maiandra GD',
    }
});