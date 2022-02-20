import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RoundedButton} from '../../components/RoundedButton';

export const TimingButton = ({changeTime, time}) => (
  <View style={styles.timingButton}>
    <RoundedButton size={75} title={time} onPress={() => changeTime(time)} />
  </View>
);

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
