import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {BackgroundIcon, UnmailUnsubscribeIcon} from '../../assets/svg';
import {introStyles, viewStyles} from '../../styles';

export const UnsubscribeScreen = () => {
  return (
    // <View
    //   style={[
    //     viewStyles.container /* {paddingVertical: '15%'} */ /* {backgroundColor: 'red'} */,
    //   ]}>
    //   <View
    //     style={[
    //       viewStyles.imageContainer,
    //       introStyles.imageContainer,
    //       // {backgroundColor: 'yellow'},
    //     ]}>
    //     <View style={viewStyles.imageContainerBackground}>
    //       <BackgroundIcon />
    //     </View>
    //     {/* <View
    //       style={[viewStyles.imageContainer, introStyles.imageIndentContainer]}> */}
    //     <UnmailUnsubscribeIcon />
    //     {/* </View> */}
    //   </View>
    //   {/* <View style={{flex: 1, paddingVertical: '5%'}}> */}
    //     <View style={[introStyles.contentWrapper]}>
    //       <Text style={viewStyles.titleBold}>Congratulations</Text>
    //       <Text style={viewStyles.description}>
    //         You’ve successfuly unsubscribed to recieving any more mail from this
    //         sender.
    //       </Text>
    //     </View>
    //     <TouchableOpacity
    //       style={[
    //         viewStyles.button,
    //         viewStyles.buttonMagical,
    //         viewStyles.buttonMedium,
    //       ]}>
    //       <Text style={[viewStyles.textBold, viewStyles.textLight]}>
    //         Take Another Photo
    //       </Text>
    //     </TouchableOpacity>
    //   {/* </View> */}
    // </View>

    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 2,
          position: 'relative',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            left: '-10%',
            // aspectRatio: 0.9,
            // backgroundColor: 'violet',
            justifyContent: 'center',
          }}>
          <UnmailUnsubscribeIcon />
        </View>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};
