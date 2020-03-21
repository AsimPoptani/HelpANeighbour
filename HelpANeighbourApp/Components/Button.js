import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class Button extends Component {
    constructor(props){
        super(props)

    }

    render() {
        const {containerStyle,text, textStyle} = this.props 
        return (
            <TouchableOpacity style={[ButtonStylesheet.containerStyle,containerStyle]}>
            <Text style={[ButtonStylesheet.textStyle,textStyle]}> {text}</Text>
            </TouchableOpacity>
        )
    }
}
Button.propTypes ={
    containerStyle : PropTypes.object,
    textStyle : PropTypes.object,
    text : PropTypes.string.isRequired,
}

Button.defaultProps ={
    containerStyle: {},
    text : "Button",
}

const ButtonStylesheet = StyleSheet.create({
    containerStyle: {
        borderRadius: 30,
        backgroundColor : '#FF2'
    },
    textStyle:{
        alignSelf: 'center',
        fontSize: 22
    }
})