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
});

export default function Signup({navigation}){
    //https://reqres.in/api/users
    const[j,setj]=useState([]);
    const add = (values) => {
        fetch('http://192.168.1.3/dw/t1/api/users/create.php',{
            method:'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password,
            })
        }).then((response) => response.json())
        .then((json) => setj(json.message))
        .catch((error) => console.error(error));
        Alert.alert('good',j.toString());
    };

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
                            placeholder='Enter password'
                            onChangeText={props.handleChange('password')}
                            onBlur={props.handleBlur('password')} 
                            value={props.values.password}
                        />
                        <Text style={mainStyles.errorText}>{props.touched.password && props.errors.password}</Text>
                
                        <Button onPress={props.handleSubmit} title='SignUp' />

                    </View>
                )}
            </Formik>
            
        </View>
    );
}