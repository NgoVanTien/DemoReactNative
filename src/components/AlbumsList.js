import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumsDetail from './AlbumsDetail';

class AlbumsList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ albums: responseData });
    });
  }
  renderAlbums() {
    return this.state.albums.map(albums =>
      <AlbumsDetail key={albums.title} albums={albums} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumsList;
