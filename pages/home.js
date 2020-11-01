import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { mainStyles } from '../styles/main';
import { Formik } from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
    email: yup.string()
        .required()
        .min(4),
    Password: yup.string()
        .required()
        .min(8),
});

export default function Home(){
    return(
        <View style={mainStyles.container}>
            <Formik
            initialValues={{ email: '', signin: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
                actions.resetForm(); 
                addReview(values);
            }}
        >
        {props => (
            <View>
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

                <Button onPress={props.handleSubmit} title='SignIn' />
            </View>
        )}
        </Formik>
    </View>
    );
}