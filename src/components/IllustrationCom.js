import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function IllustrationCom({ icon, title }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Spacing[6],
    flex: 1,
    alignItems: 'center',
  },
  image: {},
  text: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
