import React from 'react';
import {View, StyleSheet, FlatList, Text, SafeAreaView} from 'react-native';
import {fontSizes, spacingSizes} from '../../constants/sizes';
import {RoundedButton} from '../../components/RoundedButton';

const HistoryItem = ({item}) => (
  <Text style={styles.historyItem(item.isCompleted)}>{item.subject}</Text>
);

export const FocusHistory = ({focusHistory, onClear}) => (
  <SafeAreaView style={{flex: 0.5, alignItems: 'center'}}>
    {focusHistory.length > 0 && (
      <>
        <Text style={styles.title}>Things we've focused on</Text>
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{flex: 1, alignItems: 'center'}}
          data={focusHistory}
          renderItem={HistoryItem}
        />
        <View style={styles.clearContainer}>
          <RoundedButton
            size={75}
            title="clear"
            onPress={onClear}
            textStyle={{fontSize: fontSizes.lg}}
          />
        </View>
      </>
    )}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  historyItem: isCompleted => ({
    color: isCompleted ? 'lightgreen' : 'red',
    fontSize: fontSizes.md,
  }),
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacingSizes.xxl,
  },
});
