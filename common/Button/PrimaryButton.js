import React from "react";
import {Pressable, Text, StyleSheet} from "react-native";

const PrimaryButton = ({
    title,
    style = {
        containerStyle: {},
        textStyle: {}
    },
    onPress=() => {}
}) => {
    return <Pressable style={{...styles.containerStyle, ...style.containerStyle}} onPress={() => onPress()}>
        <Text style={{...styles.textStyle, ...style.textStyle}}>{title}</Text>
    </Pressable>
}

export default PrimaryButton;

const styles = StyleSheet.create({
    containerStyle: {
        height: 55,
        marginHorizontal: 12,
        marginVertical: 5,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#24a0ed',
        alignItems: 'center',
        justifyContent: 'center'
      },
    textStyle : {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});