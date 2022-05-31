import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/Colors';

export default function ButtonCom({ icon, title, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Image source={icon} />
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#FF4D58',
    borderRadius: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  btnText: {
    color: Colors.white,
    marginLeft: 8,
    lineHeight: 18,
    fontSize: 16,
    fontWeight: '500',
  },
});
