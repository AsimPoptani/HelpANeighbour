import React, { Component } from 'react'
import {  View, StyleSheet } from 'react-native'
import Button from '../Components/Button'
import Logo from '../Components/Logo'
import AppStylesheet from '../AppStylesheet'
export default class RegisterAndLoginPageScreen extends Component {
    render() {
        return (
            <View style={{justifyContent:'space-around',flex:1}}>
                <Logo style={RegisterAndLoginPageScreenStyleSheet.logo}/>
                <View>
                <Button containerStyle={RegisterAndLoginPageScreenStyleSheet.button} text="Login"/>
                 <Button containerStyle={RegisterAndLoginPageScreenStyleSheet.button} text="Register"/>
                </View>
            </View>
        )
    }
}

const RegisterAndLoginPageScreenStyleSheet = StyleSheet.create({
    logo:{
        alignSelf: 'center',
        margin:AppStylesheet.spacing,
    },
    button : {
        margin: AppStylesheet.spacing
    }
})