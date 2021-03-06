import React, {useState} from 'react';
import {Platform, StyleSheet, Text, Vibration, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {Countdown} from '../../components/Countdown';
import {colors} from '../../constants/colors';
import {fontSizes, spacingSizes} from '../../constants/sizes';
import {RoundedButton} from '../../components/RoundedButton';
import {Timing} from './Timing';

const DEFAULT_TIME = 1;
const vibrate = () => {
  if (Platform.OS === 'ios') {
    Vibration.vibrate([1000, 2000, 3000]);
  } else {
    Vibration.vibrate([0, 400, 1000, 400, 1000, 400]);
  }
};

export const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
  const [minutes, setMinutes] = useState(DEFAULT_TIME),
    [isStarted, setIsStarted] = useState(false),
    [progress, setProgress] = useState(1),
    changeTime = time => {
      setMinutes(time);
      setProgress(1);
      setIsStarted(false);
    },
    onEnd = () => {
      vibrate();
      setMinutes(DEFAULT_TIME);
      setProgress(1);
      setIsStarted(false);
      onTimerEnd();
    };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          setProgress={setProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressBarWrapper}>
        <ProgressBar
          progress={progress}
          color={colors.lightBlue}
          style={styles.progressBar}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing changeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="pause"
            size={100}
            textStyle={{fontSize: fontSizes.xl}}
            onPress={() => setIsStarted(false)}
          />
        ) : (
          <RoundedButton
            title="start"
            size={100}
            textStyle={{fontSize: fontSizes.xl}}
            onPress={() => setIsStarted(true)}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
          title="???"
          size={50}
          textStyle={{fontSize: fontSizes.lg}}
          onPress={() => clearSubject()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: spacingSizes.xl,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  countdown: {
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.25,
    flexDirection: 'row',
    padding: spacingSizes.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject: {
    paddingTop: 25,
    paddingLeft: 25,
  },
  progressBarWrapper: {
    paddingTop: spacingSizes.sm,
    paddingBottom: spacingSizes.sm,
  },
  progressBar: {
    height: 10,
  },
});
