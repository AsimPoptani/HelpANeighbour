import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Logo from '../Components/Logo'
import Button from '../Components/Button'
import TextInput from '../Components/TextInput'
import i8tn from '../i8tn'
import {iOSUIKit} from 'react-native-typography'

export default class LoginPageScreen extends Component {
    render() {
        return (
            <View>
                <Logo/>
                <Text style={iOSUIKit.largeTitleEmphasized}>{i8tn.t('pages.LoginPageScreen.Login')}</Text>
                <TextInput/>
                <TextInput/>
                <Button/>
            </View>
        )
    }
}
