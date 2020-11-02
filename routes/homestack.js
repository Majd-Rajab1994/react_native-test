import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import Home from '../pages/home';
import Table from '../pages/table';
import Signup from '../pages/signup';

const screens ={
    Home : {
        screen : Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    Table : {
        screen : Table,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    Signup : {
        screen : Signup,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    },
    
};

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:'#eee' , height: 60},
    }
});

export default HomeStack;