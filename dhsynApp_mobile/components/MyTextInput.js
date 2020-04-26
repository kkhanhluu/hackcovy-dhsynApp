import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const BLUE = '#0e76a8';
const LIGHT_GRAY = '#D3D3D3';

export default class MyTextInput extends React.Component {
  state = {
    isFocused: false,
  };

  handleFocus = (event) => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = (event) => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (
      <View style={styles.wrapper}>
        <TextInput
          multiline
          selectionColor={BLUE}
          underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
          placeholder={otherProps.placeHolder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          style={styles.textInput}
          onChange={(e) => this.props.onFullNameChange(e.target.value)}
          {...otherProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 6,
  },
});
