import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';
import { Button, ImageItem } from './common';
import pick from './api/pick';

const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class ImageUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      uri: null
    };
  }


  show() {
    pick(source => this.setState({ avatarSource: source }));
  }

  update() {
        console.log('uploadImage---uploadImage')
          const mime = 'application/octet-stream'
          const uri = this.state.avatarSource.uri
          console.log(this.state.avatarSource.uri)
          const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
          let uploadBlob = null

          const imageRef = firebase.storage().ref('images').child('image_003')

          fs.readFile(uploadUri, 'base64')
            .then((data) => {
              return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
              uploadBlob = blob
              return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
              uploadBlob.close()
              return imageRef.getDownloadURL()
            })
            .then((url) => {
                console.log('URL', url)
            })
            .catch((error) => {
                console.log('URL', error)
          })
      }


  render() {
    const img = this.state.avatarSource == null ? <ImageItem /> :
      <ImageItem avatarSource={this.state.avatarSource} />
      console.log(this.state.avatarSource);
    return (
      <View style={styles.imageUpdateContentStyle}>
        {img}
        <View style={styles.buttonUpdateStyle}>
          <Button onPress={this.show.bind(this)}>
            Update Image
          </Button>
          <Button onPress={this.update.bind(this)}>
            Update Image
          </Button>
        </View>
      </View>
    );
  }
}



const styles = {
  imageUpdateContentStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  buttonUpdateStyle: {
    height: 90,
    width: null,
  }
};

export default ImageUpdate;
