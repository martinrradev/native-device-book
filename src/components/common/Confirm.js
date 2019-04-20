import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, transparent, onConfirm, onCancel, confirmText = 'Yes', cancelText = 'No' }) => {
  return (
    <Modal visible={visible} transparent={transparent} animationType="slide" onRequestClose={() => {}}>
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onConfirm}>{confirmText}</Button>
          <Button onPress={onCancel}>{cancelText}</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
})

export { Confirm };
