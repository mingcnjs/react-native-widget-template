import React, {FC, ReactNode} from 'react';
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {layoutColors} from '../../themes/colors';

const backgroundImage = require('../../assets/images/bg-work.png');

const styles = StyleSheet.create({
  widgetContainer: {
    flex: 1,
    backgroundColor: layoutColors.blueMain,
    marginHorizontal: 16,
    borderRadius: 24,
    position: 'relative',
  },
  widgetContent: {
    flex: 1,
    paddingTop: 19,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bgContainer: {height: 180},
  image: {borderRadius: 24},
});

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const WidgetContainer: FC<Props> = props => {
  const {children, style} = props;

  return (
    <View style={[styles.widgetContainer, style]}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.bgContainer}
        imageStyle={styles.image}>
        <LinearGradient
          /*
            The opacity of original image is 0.4, so we set opacity 0 to match design.
            If we have original image with no opacity, we can set 0,4 instead of 0
          */
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)']}
          style={styles.widgetContent}>
          {children}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default WidgetContainer;
