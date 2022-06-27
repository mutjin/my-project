import React from 'react';
import {StatusBar, SafeAreaView,Text } from 'react-native';
import {viewStyles,textStyles} from './styles';

const App=()=>{
    return(
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.StatusBar}/>
            <Text style={textStyles.title}>Walk Goyang</Text>
        </SafeAreaView>
    );
};

export default App;