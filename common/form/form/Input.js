import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';
import {validate} from "./form.utils";
import {useState} from "react";

function Input({
    style,
    onChange=() => {},
    value,
    placeholder="",
    onBlur=() => {},
    constraints=[]
}) {
    const [error, setError] = useState(false);
    const handleOnBlur = (e) => {
        // handle on blur
        // console.log("BLUR", e.nativeEvent.text);
        // if (validate(constraints, e?.nativeEvent?.text)) {

        // } else {
        //     setError(true);
        // }
        onBlur(e); 
    }
    const getStyles = () => {
        return {...styles.input, ...style}
    }
    return <>
            <TextInput
                autoCorrect={false}
                style={{...styles.input, ...style}}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                onBlur={handleOnBlur}
            />
    </>
}

export default Input;

const styles = StyleSheet.create({
    input: {
      height: 55,
      marginHorizontal: 12,
      marginVertical: 5,
      borderWidth: 1,
      padding: 10,
      borderRadius: 8
    },
    inputContainer: {
        margin: 12
    },  
    error: {
        borderColor: 'red'
    }
});