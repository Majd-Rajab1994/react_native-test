import React from 'react';
import {StyleSheet,Text,View, ViewComponent} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({navigation}){
    const openMenu  = () => {
        navigation.openDrawer();
    };
    return(
        <View style={Styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={Styles.icon}/>
            <Text style={Styles.headertext}>First App</Text>

        </View>
    );
}

const Styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headertext : {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
    },
    icon : {
        position: 'absolute',
        left: 16,
    }

})