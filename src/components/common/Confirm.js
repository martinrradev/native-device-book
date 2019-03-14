import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, onConfirm, onCancel }) => {
  return (
    <Modal transparent={visible} animationType="slide" onRequestClose={() => {}}>
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onConfirm}>Yes</Button>
          <Button onPress={onCancel}>No</Button>
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
