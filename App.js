import React, {useState} from 'react';
import {StatusBar, SafeAreaView,Text,Dimensions,View } from 'react-native';
import {viewStyles,textStyles} from './styles';
import Input from './components/Input';
import {images} from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';

export default function App(){

    /*get width from dimension*/
    const width=Dimensions.get('window').width;

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
            <View width={width-30}>
                <Task text="todo item #1"/>
                <Task text="todo item #2"/>
            </View>
        </SafeAreaView>
    );
    /*set title and background*/
};