import React from "react";
import { useEffect, useState } from "react";
import {validate} from "./form.utils";
import {cloneDeep} from "lodash";
import {PrimaryButton} from "../../Button";


function Form({
    children,
    constraints,
    formData
}) {
    const [isValidForm, setIsValidForm] = useState(true);
    const [_formData, _setFormData] = useState({});
    
    useEffect(() => {
        _setFormData(formData);
    }, [])

    useEffect(() => {
        // console.log("FORMDATA CHANGED", _formData);
    }, [_formData])

    const onChangeText = (key, value) => {
        console.log("CHANGE",{
            key,
            value
        })
        _setFormData((prevState) => {
            console.log({prevState});
            return {
                ...prevState,
                [key]: {
                    ...prevState[key],
                    value
                } 
            }
        })
    }
    
    const onBlur = (key, e) => {
        // console.log("BLUR ",{
        //     key,
        //     value: e.nativeEvent.text})
        let validity = validate(e.nativeEvent.text, _formData?.[key].contraints);
        _setFormData(prevState => {
            return {
                ...prevState,
                [key]: {
                    ...prevState[key],
                    validity
                } 
            }
        });
    }

    const reset = ( ) => {
        // console.log("Reset ", formData);
        _setFormData(cloneDeep(formData));
    }

    const onSubmitHandler = (cb) => {
        let _validity = {};
        let isValid = true;
        let _prevState = cloneDeep(_formData);
        for (let key in _formData) {
            const validity = validate(_formData?.[key]?.value, _formData?.[key]?.contraints);
            console.log('onSubmit validity ', validity);
            if (!validity?.isValid) {
                isValid = false;
                _prevState = {
                    ..._prevState,
                    [key]: {
                        ..._prevState[key],
                        validity
                    } 
                }
            } else {
                _validity = {
                    ..._validity,
                    [key]: {...validity}
                }
            }
        }
        if (!isValid)  {
            setIsValidForm(false);
            _setFormData(_prevState);
            return;
        }
        // let prevState = cloneDeep(_formData);
        for (let key in _validity) { 
            _prevState[key].validity = _validity[key];
        }
        _setFormData(_prevState);
        setIsValidForm(true);
        cb(_prevState);
    }

    return <>
        {
            children({
                isValid: isValidForm,
                onChangeText,
                onBlur,
                formData: _formData,
                onSubmitHandler,
                SubmitButton: ({onSubmit = () => {}}) => { 
                    return <PrimaryButton onPress={() => onSubmitHandler(onSubmit)} title={'SUBMIT'} /> 
                },
                reset
            })
        }
    </>
}
export default Form;
