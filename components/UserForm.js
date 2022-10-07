import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, Pressable } from 'react-native'
import {Form, Input} from "../common/form/form"
import { SecondaryButton } from '../common/Button';
import {useUserDetailsContext} from "../context/userDetails.context";

const UserForm = ({ onSubmit = () => {}}) => {
    const {setUserDetails} = useUserDetailsContext();
    const callApi = (data) => {
        const userData = {};
        for (let key in data) {
            userData[key] = data[key].value;
        }
        setUserDetails(userData);
        onSubmit();
    }
    return (
      <SafeAreaView>
        <Form
            formData={{
                name: {
                    value: "",
                    contraints: [{
                        contraintName: 'REQUIRED_TRUE',
                        errorMessage: "Name is required"
                    }, {
                        contraintName: 'CUSTOM',
                        pattern: /^[a-zA-Z][a-zA-Z ]+$/,
                        errorMessage: "Name is not in correct format"
                    }, 
                    {
                        contraintName: 'MAX_LENGTH',
                        length: 20,
                        errorMessage: "Name is greater than allowed value"
                    }
                ]
                },
                email: {
                    value: "",
                    contraints: [{
                        contraintName: 'REQUIRED_TRUE',
                        errorMessage: "Email is required"
                    }, {
                        contraintName: 'EMAIL',
                        errorMessage: "Email is not in correct format"
                    }, {
                        contraintName: 'MAX_LENGTH',
                        length: 60,
                        errorMessage: "email is greater than allowed value"
                    }]
                },
                age: {
                    value: "",
                    contraints: [{
                        contraintName: 'REQUIRED_TRUE',
                        errorMessage: "Age is required"
                    },
                    {
                        contraintName: 'NUMBER',
                        errorMessage: "Age should be number"
                    }, 
                    {
                        contraintName: 'CUSTOM_FUNCTION',
                        errorMessage: "Age is not under 0 and 120 constraints",
                        func: (value) => {
                            if (value > 0 && value <= 120) {
                                return true;
                            }
                            return false
                        }
                    }]
                },
                number: {
                    value: "",
                    contraints: [{
                        contraintName: 'REQUIRED_TRUE',
                        errorMessage: "Number is required"
                    },{
                        contraintName: 'MOBILE',
                        errorMessage: "Number is not in correct format"
                    }, {
                        contraintName: 'MIN_LENGTH',
                        length: 10,
                        errorMessage: "Number is smaller than allowed value"
                    }]
                }
            }}
        >
            {
                ({
                    isValid,
                    onChangeText,
                    onBlur,
                    onSubmitHandler,
                    formData,
                    SubmitButton,
                    reset
                }) => {
                    return <>
                    <View style={styles.container}>
                        <View style={styles.formSection}>
                            <View style={styles.inputContainer}>
                                <Input 
                                    style={formData.name?.validity?.isValid === false ? styles.errorInput : {}}
                                    onChange={(e) => onChangeText('name', e)}
                                    onBlur={(e) => onBlur('name', e)}
                                    value={formData?.name?.value}
                                    placeholder="Name"
                                />
                                {formData.name?.validity?.isValid === false ? <Text style={styles.errorMessage}>{formData?.name.validity?.errorMessage}</Text> : null} 
                            </View>
                            <View style={styles.inputContainer}>
                                <Input 
                                    style={formData.email?.validity?.isValid === false ? styles.errorInput : {}}
                                    onChange={(e) => onChangeText('email', e)}
                                    onBlur={(e) => onBlur('email', e)}
                                    value={formData?.email?.value}
                                    placeholder="Email"
                                />
                                {formData.email?.validity?.isValid === false ? <Text style={styles.errorMessage}>{formData?.email.validity?.errorMessage}</Text> : null} 
                            </View>
                            <View style={styles.inputContainer}>
                                <Input 
                                    style={formData.age?.validity?.isValid === false ? styles.errorInput : {}}
                                    onChange={(e) => onChangeText('age', e)}
                                    onBlur={(e) => onBlur('age', e)}
                                    value={formData?.age?.value}
                                    placeholder="Age"
                                />
                                {formData.age?.validity?.isValid === false ? <Text style={styles.errorMessage}>{formData?.age.validity?.errorMessage}</Text> : null} 
                            </View>
                            <View>
                                <Input 
                                    style={formData.number?.validity?.isValid === false ? styles.errorInput : {}}
                                    onChange={(e) => onChangeText('number', e)}
                                    onBlur={(e) => onBlur('number', e)}
                                    value={formData?.number?.value}
                                    placeholder="Number"
                                />
                                {formData.number?.validity?.isValid === false ? <Text style={styles.errorMessage}>{formData?.number.validity?.errorMessage}</Text> : null} 
                            </View>
                        </View>
                        <View style={styles.buttonSection}>
                            <SubmitButton onSubmit={callApi} />
                            <SecondaryButton title={'RESET'} onPress={reset} />
                        </View>
                    </View>
                    </>
                }
            }
        </Form>
      </SafeAreaView>
    );
  };

  export default UserForm;

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 2,
      borderWidth: 1,
      padding: 10,
    },
    errorInput: {
        borderColor: 'red'
    },  
    errorMessage: {
        marginVertical: 2,
        marginHorizontal: 12,
        color: 'red'
    },
    inputContainer: {
        marginVertical: 5
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingVertical: 40
    },
    formSection: {
        // backgroundColor: 'green'
    },
    buttonSection: {
        // backgroundColor: 'green'
    }
  });