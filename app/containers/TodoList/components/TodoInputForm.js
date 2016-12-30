import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles';

class TodoInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onSubmit() {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  onChangeText(text) {
    this.setState({ text });
  }

  render() {
    return (
      <View style={styles.todoListInputWrapper}>
        <View style={styles.todoListInputWrap}>
          <TextInput
            placeholder="Learn Redux..."
            style={styles.todoListInput}
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmit}
            blurOnSubmit={false}
            value={this.state.text}
          />
        </View>
        <View style={styles.todoListInputButtonWrap}>
          <TouchableOpacity
            style={styles.todoListInputButton}
            activeOpacity={0.5}
            onPress={this.onSubmit}
          >
            <Text style={styles.todoListInputButtonText}>ADD TODO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TodoInputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoInputForm;
