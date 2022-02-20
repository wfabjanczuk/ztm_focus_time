import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';
import {FocusHistory} from './src/features/focus/FocusHistory';
import {colors} from './src/constants/colors';
import {Timer} from './src/features/timer/Timer';
import {spacingSizes} from './src/constants/sizes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null),
    [focusHistory, setFocusHistory] = useState([]),
    addFocusSubjectToHistory = isCompleted => {
      setFocusHistory([
        ...focusHistory,
        {
          key: String(focusHistory.length + 1),
          subject: focusSubject,
          isCompleted: isCompleted,
        },
      ]);
    },
    onClear = () => setFocusHistory([]),
    saveFocusHistory = async () => {
      try {
        await AsyncStorage.setItem(
          'focusHistory',
          JSON.stringify(focusHistory),
        );
      } catch (e) {
        console.log(e);
      }
    },
    loadFocusHistory = async () => {
      try {
        const history = await AsyncStorage.getItem('focusHistory');

        if (history && JSON.parse(history).length) {
          setFocusHistory(JSON.parse(history));
        }
      } catch (e) {
        console.log(e);
      }
    };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusSubjectToHistory(true);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusSubjectToHistory(false);
            setFocusSubject(null);
          }}
        />
      ) : (
        <View style={{flex: 1}}>
          <Focus setSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </View>
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
