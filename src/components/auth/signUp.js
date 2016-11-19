import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import styles from '../../styles';

module.exports = React.createClass({
  getInitialState() {
    return({
      email: '',
      password: ''
    })
  },

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Email'
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={() => this.props.navigator.pop()}>
            <Text style={styles.link}>Already a member? Sign in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
})
