import React, {useEffect, useRef, useState} from 'react';
import OutsidePressHandler from 'react-native-outside-press';
import {
  Animated,
  Platform,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import NotoText from '../components/labels/NotoText';
import {layoutColors} from '../constants/colors';
import DownArrowIcon from '../assets/icons/DownArrowIcon';
import {FontDimensions, FontWeights} from '../types/labels';

const OPTION_HEIGHT = 30;
const PADDING = 5;
const SELECTOR_HEIGHT = OPTION_HEIGHT + PADDING * 6;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  selectorButton: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderRadius: 4,
    height: SELECTOR_HEIGHT,
  },
  contentContainer: {
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    position: 'absolute',
    top: 30,
    backgroundColor: 'transparent',
    borderRadius: 4,
    padding: PADDING,
    shadowOffset: {height: 15, width: 0},
    shadowRadius: 30,
    zIndex: 30,
    elevation: 24,
    shadowOpacity: 1,
    shadowColor: `rgba(${layoutColors.blue4}, ${
      Platform.OS === 'ios' ? '0.15' : '0.4'
    })`,
  },
  optionButton: {
    height: OPTION_HEIGHT,
    paddingHorizontal: 4,
    justifyContent: 'center',
    borderRadius: 4,
  },
  selectedItem: {backgroundColor: 'rgba(0,0,0,0.1)'},
  mb5: {marginBottom: 5},
  ml9: {marginLeft: 9},
  area: {
    opacity: 0.8,
    marginTop: -2,
  },
});

type OptionItemProps = {
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  title: string;
};

function OptionItem(props: OptionItemProps) {
  const {isSelected = false, onPress, style, title} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.optionButton, style]}>
      <NotoText
        fontDimensions={FontDimensions.TITLE1}
        fontWeight={isSelected ? FontWeights.BOLD : FontWeights.REGULAR}>
        {title}
      </NotoText>
    </TouchableOpacity>
  );
}

type Props<T> = {
  data: T[];
  valueExtractor: (item: T) => string;
  keyExtractor: (item: T) => string;
  selectedItemId: string;
  onSelectItem: (id: string) => void;
};

export default function DropdownSelector<T>(props: Props<T>) {
  const {data, selectedItemId, onSelectItem, keyExtractor, valueExtractor} =
    props;

  const height = useRef(new Animated.Value(30)).current;

  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    const optionsHeight = (OPTION_HEIGHT + PADDING) * data.length + PADDING;

    Animated.timing(height, {
      toValue: showSelector ? optionsHeight : SELECTOR_HEIGHT,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [showSelector, data, height]);

  const selectedItem = data.find(
    item => keyExtractor(item) === selectedItemId,
  ) as T;

  const onPressOption = (id: string, isSelected: boolean) => {
    if (!isSelected) {
      onSelectItem(id);
    }
    setShowSelector(false);
  };

  const onOutSidePress = () => {
    setShowSelector(false);
  };

  return (
    <OutsidePressHandler onOutsidePress={onOutSidePress} disabled={false}>
      <Animated.View style={[styles.container, {height}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.selectorButton}
          onPress={() => setShowSelector(true)}>
          <View style={styles.contentContainer}>
            <NotoText
              fontDimensions={FontDimensions.TITLE1}
              fontWeight={FontWeights.BOLD}>
              {valueExtractor(selectedItem)}
            </NotoText>
            <DownArrowIcon style={styles.ml9} />
          </View>
          <View style={styles.contentContainer}>
            <NotoText
              fontDimensions={FontDimensions.LABEL1}
              style={styles.area}>
              Bay Area
            </NotoText>
          </View>
          {showSelector && (
            <Animated.View style={[styles.options, {height}]}>
              {data.map((item, index, array) => {
                const isLast = index === array.length - 1;
                const id = keyExtractor(item);
                const isSelected = id === selectedItemId;

                return (
                  <OptionItem
                    key={id}
                    title={valueExtractor(item)}
                    isSelected={isSelected}
                    style={[
                      !isLast && styles.mb5,
                      isSelected && styles.selectedItem,
                    ]}
                    onPress={() => onPressOption(id, isSelected)}
                  />
                );
              })}
            </Animated.View>
          )}
        </TouchableOpacity>
      </Animated.View>
    </OutsidePressHandler>
  );
}
