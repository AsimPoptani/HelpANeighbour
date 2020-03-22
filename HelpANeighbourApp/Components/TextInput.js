import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

// Text input with some application specfic stuff
export default class TextInput2 extends Component {
  render() {
    const {containerStyle, style} = this.props;
    return (
      <View style={containerStyle}>
        <TextInput
          placeholder={'A text input'}
          spellCheck
          style={[TextInputStyleSheet.TextInput, style]}
          {...this.props}
        />
      </View>
    );
  }
}
TextInput.propTypes = {
  containerStyle: PropTypes.object,

  style: PropTypes.object,
};

TextInput.defaultProps = {
  style: {},
  containerStyle: {},
};
const TextInputStyleSheet = StyleSheet.create({
  TextInput: {},
});
