import React,{useState} from 'react';
import { StyleSheet, Button, TextInput, View, Text, Alert } from 'react-native';
import { mainStyles } from '../styles/main';
import { Formik } from 'formik';
import * as yup from 'yup';
import { color, set } from 'react-native-reanimated';

const reviewSchema = yup.object({
    username: yup.string()
        .required()
        .min(4),
    email: yup.string()
        .required()
        .min(4),
    Password: yup.string()
        .required()
        .min(8),
});

export default function Signup({navigation}){

    const[j,setj]=useState([]);
    const add = (values) => {
        fetch('https://reqres.in/api/users',{
            method:'post',
            body:JSON.stringify({
                name: values.username,
                job: values.email,
                //password: values.password
            })
        }).then((response) => response.json())
        .then((json) => setj(json))
        .catch((error) => console.error(error));
        Alert.alert('good','good');
    }
    return(
        <View style={mainStyles.container}>
            <Formik
            initialValues={{username:'', email: '', password: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
                //actions.resetForm();
                add(values);
            }}
            >
                {props => (
                    <View>
                        <TextInput
                            style={mainStyles.input}
                            placeholder='Enter username'
                            onChangeText={props.handleChange('username')}
                            onBlur={props.handleBlur('username')} 
                            value={props.values.username}
                        />
                        <Text style={mainStyles.errorText}>{props.touched.username && props.errors.username}</Text>
                        <TextInput
                            style={mainStyles.input}
                            placeholder='Enter Email'
                            onChangeText={props.handleChange('email')}
                            onBlur={props.handleBlur('email')} 
                            value={props.values.email}
                        />
                        <Text style={mainStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                
                        <TextInput
                        style={mainStyles.input}
                        multiline minHeight={60}
                        placeholder='Enter Password'
                        onChangeText={props.handleChange('Password')}
                        onBlur={props.handleBlur('Password')}
                        value={props.values.Password}
                        />
                        <Text style={mainStyles.errorText}>{props.touched.Password && props.errors.Password}</Text>
                
                        <Button onPress={props.handleSubmit} title='SignUp' />

                    </View>
                )}
            </Formik>
            
        </View>
    );
}