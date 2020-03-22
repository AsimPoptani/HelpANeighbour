import React, { Component } from 'react'
import {  View, StyleSheet } from 'react-native'
import Button from '../Components/Button'
import Logo from '../Components/Logo'
import AppStylesheet from '../AppStylesheet'
import i8tn from '../i8tn'
export default class RegisterAndLoginPageScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{justifyContent:'space-around',flex:1}}>
                <Logo style={RegisterAndLoginPageScreenStyleSheet.logo}/>
                <View>
                <Button onPress={()=>navigation.navigate('LoginPageScreen')} containerStyle={RegisterAndLoginPageScreenStyleSheet.button} text={i8tn.t('pages.RegisterAndLoginPageScreen.Login')}/>
                <Button onPress={()=>navigation.navigate('RegisterPageScreen')} containerStyle={RegisterAndLoginPageScreenStyleSheet.button} text={i8tn.t('pages.RegisterAndLoginPageScreen.Register')}/>
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