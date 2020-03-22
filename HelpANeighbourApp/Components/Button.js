import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {iOSUIKit,iOSColors} from 'react-native-typography'
import PropTypes from 'prop-types'

export default class Button extends Component {
    constructor(props){
        super(props)

    }

    render() {
        const {containerStyle,text, textStyle,disabled,disabledColor,activeColor} = this.props 
        return (
            <TouchableOpacity style={[{backgroundColor : disabled ? disabledColor : activeColor},ButtonStylesheet.containerStyle,containerStyle]}>
            <Text style={[ButtonStylesheet.textStyle,textStyle]}> {text}</Text>
            </TouchableOpacity>
        )
    }
}
Button.propTypes ={
    containerStyle : PropTypes.object,
    textStyle : PropTypes.object,
    text : PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    disabledColor: PropTypes.string
}

Button.defaultProps ={
    containerStyle: {},
    text : "Button",
    disabled: false,
    disabledColor: iOSColors.gray,
    activeColor: iOSColors.tealBlue
}

const ButtonStylesheet = StyleSheet.create({
    containerStyle: {
        borderRadius: 30, 
        justifyContent: 'center',
        height:50
    },
    textStyle:{
        ...iOSUIKit.body,
        textAlign:'center'
        }
})