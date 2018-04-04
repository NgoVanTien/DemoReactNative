import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from './common';

const AlbumsDetail = ({ albums }) => {
  const { title, artist, thumbnail_image, image, url } = albums;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} text>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

export default AlbumsDetail;

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  headerTextStyle: {
     fontSize: 18,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,

  }
}
