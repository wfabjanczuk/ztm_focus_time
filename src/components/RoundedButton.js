import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 50,
  ...props
}) => {
  const styles = getStyles(size);

  return (
    <TouchableOpacity style={[styles.radius, style]} onPress={props.onPress}>
      <Text style={[styles.text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const getStyles = size =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: colors.white,
      borderWidth: 2,
    },
    text: {
      color: colors.white,
      fontSize: (size * 3) / 7,
    },
  });
