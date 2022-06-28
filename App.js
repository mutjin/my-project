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

    const [newTask,setNewTask]=useState('');

    const _addTask=()=>{
        alert(`Add: ${newTask}`); //alert events
        const ID=Date.now().toString();
        const newTaskObject={[ID]:{id:ID,text:newTask,completed:false},}; 
        setNewTask('');
        setTasks({...tasks,...newTaskObject});
    };

    const _deleteTask=id=>{
        const currentTasks=Object.assign({},tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    };

    const _handleTextChange = text => {
        setNewTask(text);
    };

    /*add task*/
    const [tasks,setTasks]=useState({
        '1':{id:'1',text:"TODO item #1",completed:false},
        '2':{id:'2',text:"TODO item #2",completed:true},
    });


    /*set title and background*/
    return(
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.StatusBar}/>
            <Text style={textStyles.title}>Walk Goyang</Text>
            <Input value={newTask} onChangeText={_handleTextChange} onSubmitEditing={_addTask}/>
            <View width={width-30}>
                {Object.values(tasks).reverse().map(item=>(
                <Task key={item.id} item={item} deleteTask={_deleteTask}/>
                ))}
            </View>
        </SafeAreaView>
    );
    /*set title and background*/
};