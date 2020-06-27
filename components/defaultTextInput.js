import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default DefaultTextInput = ({ children, style }) => {
    return (
        <TextInput style={{ ...styles.defaultFont, ...style }} multiline={true} onChangeText={text => console.log(text)}>{children}</TextInput>
    );
}

const styles = StyleSheet.create({
    defaultFont: {
        fontFamily: 'Maiandra GD',
    }
});