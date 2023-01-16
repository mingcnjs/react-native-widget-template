import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AlarmIcon from '../../assets/icons/AlarmIcon';
import ChatIcon from '../../assets/icons/ChatIcon';
import {layoutColors} from '../../themes/colors';
import IconButton from '../buttons/IconButton';
import DropdownSelector from '../DropdownSelector';
import {spaceOptions} from './Widget.mock';

const logo = require('../../assets/images/bg-logo.png');
const profile = require('../../assets/images/profile.png');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 13,
  },
  dropdown: {flexDirection: 'row'},
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
    overflow: 'hidden',
    marginLeft: 15,
    borderColor: 'transparent',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  icon: {
    backgroundColor: layoutColors.white,
  },
  profileImage: {
    width: 32,
    height: 31,
    overflow: 'hidden',
  },
});

const WidgetHeader = () => {
  const [selectItemId, setSelectItemId] = useState(spaceOptions[0].id);
  const onSelectSpace = (id: string) => {
    setSelectItemId(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dropdown}>
        <Image source={logo} resizeMode={'contain'} style={styles.image} />
        <DropdownSelector
          data={spaceOptions}
          onSelectItem={onSelectSpace}
          valueExtractor={item => item.name}
          keyExtractor={item => item.id}
          selectedItemId={selectItemId}
        />
      </View>
      <View style={styles.iconsContainer}>
        <IconButton style={styles.icon}>
          <ChatIcon />
        </IconButton>
        <IconButton style={styles.icon}>
          <AlarmIcon />
        </IconButton>
        <IconButton style={styles.icon}>
          <Image
            source={profile}
            resizeMode={'contain'}
            style={styles.profileImage}
          />
        </IconButton>
      </View>
    </View>
  );
};

export default WidgetHeader;
