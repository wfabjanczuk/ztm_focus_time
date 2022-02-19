import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontSizes, spacingSizes} from '../constants/sizes';
import {colors} from '../constants/colors';

const minutesToMillis = minutes => minutes * 60000;

const formatTime = time => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes = 1,
  isPaused = true,
  setProgress = null,
}) => {
  const interval = React.useRef(null),
    [millis, setMillis] = useState(minutesToMillis(minutes)),
    updateCountdown = () => {
      setMillis(time => {
        if (time === 0) {
          // TODO: Ending action
          return time;
        }

        const timeLeft = time - 1000;
        setProgress(timeLeft / minutesToMillis(minutes));

        return timeLeft;
      });
    },
    minutesLeft = Math.floor(millis / 60000),
    secondsLeft = Math.floor((millis - minutesToMillis(minutesLeft)) / 1000);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }

      return;
    }

    interval.current = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <Text style={styles.text}>
      {formatTime(minutesLeft)}:{formatTime(secondsLeft)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    padding: spacingSizes.lg,
    color: colors.white,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
