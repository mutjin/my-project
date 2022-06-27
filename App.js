import React, {useState} from 'react';
import {StatusBar, SafeAreaView,Text } from 'react-native';
import {viewStyles,textStyles} from './styles';
import Input from './components/Input';

export default function App(){

    /*aleart events*/
    const [newTask,setNewTask]=useState('');

    const _addTask=()=>{
        alert(`Add: ${newTask}`);
        setNewTask('');
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };
    /*aleart events*/


    /*set title and background*/
    return(
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.StatusBar}/>
            <Text style={textStyles.title}>Walk Goyang</Text>
            <Input value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>
            
        </SafeAreaView>
    );
    /*set title and background*/
};