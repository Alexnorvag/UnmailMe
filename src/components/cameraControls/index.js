import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderMenu} from '../navigatorHeader';
import {navigationStyles, viewStyles} from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CameraControls = ({
  navigation,
  flashHandler,
  flashMode,
  infoHandler,
  renderButtons,
}) => {
  return (
    <>
      <SafeAreaView style={viewStyles.positionTop}>
        <View style={styles.topPanelControls}>
          <HeaderMenu styles={[navigationStyles.headerMenu]} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="close" size={14} style={viewStyles.closeButton} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={[viewStyles.positionRight, styles.rightPanelContainer]}>
        <View style={styles.rightPanelControls}>
          <TouchableOpacity onPress={flashHandler}>
            <Icon
              name={flashMode ? 'flash-on' : 'flash-off'}
              size={20}
              style={styles.cameraControlButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={infoHandler}>
            <Icon name="info" size={20} style={styles.cameraControlButton} />
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView
        style={[viewStyles.positionBottom, styles.bottomPanelContainer]}>
        <View style={styles.bottomPanelControls}>{renderButtons()}</View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topPanelControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  rightPanelContainer: {
    top: '15%',
    width: '15%',
    height: '70%',
  },
  rightPanelControls: {
    flex: 1,
    justifyContent: 'center',
  },
  cameraControlButton: {
    alignSelf: 'flex-start',
    color: '#fff',
    backgroundColor: '#590866',
    marginHorizontal: '15%',
    marginVertical: '10%',
    padding: 8,
    borderRadius: 18,
    overflow: 'hidden',
  },
  bottomPanelContainer: {
    top: '85%',
  },
  bottomPanelControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
