import React, { Component } from 'react'
import { Text, SafeAreaView } from 'react-native'
import Button from '../Components/Button'
export default class Splashscreen extends Component {

    render() {
        
        return (
            <SafeAreaView>
                <Button onPress={()=>{this.props.navigation.navigate('RegisterAndLoginPageScreen')}}/>
            </SafeAreaView>
        )
    }
}
