import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';
import {colors} from './src/constants/colors';
import {Timer} from './src/features/timer/Timer';
import {spacingSizes} from './src/constants/sizes';

const App = () => {
  const [focusSubject, setFocusSubject] = useState('React Native');

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus setSubject={setFocusSubject} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacingSizes.lg,
    backgroundColor: colors.darkBlue,
  },
});

export default App;
