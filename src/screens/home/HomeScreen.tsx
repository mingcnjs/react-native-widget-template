import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Widget from '../../components/widget/Widget';
import {layoutColors} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: layoutColors.white,
  },
  scrollView: {backgroundColor: layoutColors.white},
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Widget />
      </ScrollView>
    </SafeAreaView>
  );
}
