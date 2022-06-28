import React from 'react';
import { StyleSheet,TextInput,Dimensions } from 'react-native';
import {theme} from '../theme';

const Input=({value,onChangeText,onSubmitEditing})=>{
    return(
        <TextInput style={inputStyle.textInput}
        placeholder="+ Add a task"
        placeholderTextColor={theme.main}
        maxLength={20}
        keyboardAppearance="dark"
        value={value} onChangeText={onChangeText} onSubmitEditing={onSubmitEditing}>
        </TextInput>
    );
};

const inputStyle=StyleSheet.create({
    textInput:25,
    width:300,
    heighth:30,
    marginTop:10,
    marginLeft:3,
    paddingLeft:15,
    paddingTop:2,
    borderRadius:10,
    backgroundColor:theme.itemBackground,
    color:theme.text,
});

export default Input;