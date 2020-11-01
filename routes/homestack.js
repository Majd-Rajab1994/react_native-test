import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import Home from '../pages/home';

const screens ={
    Home : {
        screen : Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    }
};

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{backgroundColor:'#eee' , height: 60},
    }
});

export default HomeStack;