import React from 'react';
import { View, Image } from 'react-native';

const ImageItem = ({ avatarSource }) => {
    return (
      <View style={styles.containerStyle}>
        <Image source={avatarSource} style={styles.imageContentStyle} />
      </View>
    );
};

const styles = {
  containerStyle: {
    height: 300,
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
  },
  imageContentStyle: {
    width: null,
    height: 300,
    flex: 1
  }
};
export { ImageItem };
