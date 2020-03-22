import React, { Component } from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'
export default class Logo extends Component {
    // For now we are using a temp logo
    
    render() {
    const logo= require('../assets/images/placeholder.jpg')
    const {style} = this.props
        return (
            <View style={style}>
                <Image source={logo}/>
            </View>
        )
    }
}
Logo.propTypes={
    style: PropTypes.object
}

Logo.defaultProps={
    style:{}
}