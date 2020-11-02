import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Header from '../shared/header';
import Table from '../pages/table';

const screens = {
    Table: {
        screen : Table,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />
            }
        }
    }
};

const Tablestack = createStackNavigator(screens,{
    defaultNavigationOptions: {
        headerStyle: {backgroundColor: '#eee' ,height: 60},
    }
});

export default Tablestack;

