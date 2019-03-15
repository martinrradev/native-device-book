import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.inputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    fontSize: 16,
    flex: 1
  },
  labelStyle: {
    fontSize: 14,
    flex: 1,
    marginBottom: 8
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});

export { Input };
