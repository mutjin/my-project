import React from 'react';
import {StatusBar, SafeAreaView,Text } from 'react-native';
import {viewStyles,textStyles} from './styles';
import Input from './components/Input';

const App=()=>{
    return(
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.StatusBar}/>
            <Text style={textStyles.title}>Walk Goyang</Text>
            <Input/>
            
        </SafeAreaView>
    );
};

export default App;