import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {Countdown} from '../../components/Countdown';
import {colors} from '../../constants/colors';
import {fontSizes, spacingSizes} from '../../constants/sizes';
import {RoundedButton} from '../../components/RoundedButton';

export const Timer = ({focusSubject}) => {
  const [isStarted, setIsStarted] = useState(false),
    [progress, setProgress] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} setProgress={setProgress} />
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
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    padding: spacingSizes.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarWrapper: {
    paddingTop: spacingSizes.sm,
    paddingBottom: spacingSizes.sm,
  },
  progressBar: {
    height: 10,
  },
});
