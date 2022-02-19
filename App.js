import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';
import {colors} from './src/constants/colors';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here I want to build a timer</Text>
      ) : (
        <Focus setSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});

export default App;
