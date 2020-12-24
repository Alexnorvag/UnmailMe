import React from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';

import {viewStyles} from '../../styles';

export const ModalWindow = ({
  visible,
  onVisibilityChange,
  renderHeader,
  renderContent,
  renderFooter,
}) => {
  return (
    <View>
      <Modal
        backdropColor={'#000'}
        isVisible={visible}
        onBackdropPress={onVisibilityChange}>
        <View style={viewStyles.centeredView}>
          <View style={viewStyles.modalContainer}>
            {renderHeader && renderHeader()}
            {renderContent && renderContent()}
            {renderFooter && renderFooter()}
          </View>
        </View>
      </Modal>
    </View>
  );
};
