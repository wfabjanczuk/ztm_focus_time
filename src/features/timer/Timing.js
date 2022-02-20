import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RoundedButton} from '../../components/RoundedButton';

export const Timing = ({changeTime}) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="1" onPress={() => changeTime(1)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="2" onPress={() => changeTime(2)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="3" onPress={() => changeTime(3)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
