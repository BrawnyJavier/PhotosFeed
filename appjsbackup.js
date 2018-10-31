import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import PhotoList from './src/Components/PhotoList';
import PhotoDetails from './src/Components/PhotoDetails';
import { connect } from 'react-redux';
import { addPhoto, deletePhoto, deselectPhoto, selectPhoto } from './src/store/actions/photos'
// import { Container, Header, Content, Text, Button, Toast } from "native-base";
class App extends React.Component {
  // state = {
  //   photoName: '',
  //   Photos: [],
  //   SelectedPhoto: null
  // }
  placeNameChangeHandler = (event) => {
    this.setState({
      photoName: event
    })
  }
  onDeletePhoto = (index) => {
    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     Photos: prevState.Photos.filter((p, i) => {
    //       return p.key != index
    //     }),
    //     SelectedPhoto: null
    //   }
    // })
    this.props.deletePhoto(index);
  }
  onAddPhoto = (event) => {
    console.log('Lol is saving!')
    // if (this.state.photoName.trim() === '') {
    //   alert('No puedes añadir un nombre vacio.');
    //   return;
    // }
    this.props.addPhoto('')
    // this.setState(prevState => {
    //   const NewPhoto = {
    //     photoName: this.state.photoName,
    //     key: (Math.floor((Math.random() * 100) + 1)).toString(),
    //     image: {
    //       uri: GetRandomImage()
    //     }
    //   }
    //   return {
    //     Photos: prevState.Photos.concat(NewPhoto)
    //   }
    // })
  }
  onPhotoPressed = (SelectedPhoto) => {
    this.props.selectPhoto(SelectedPhoto);
    // this.setState((prevState) => {
    //   return {
    //     SelectedPhoto: SelectedPhoto
    //   }
    // })
  }
  onModalClosed = () => {
    this.props.deselectPhoto();
    // this.setState((prevState) => {
    //   return {
    //     SelectedPhoto: null
    //   }
    // })
  }
  render() {
    return (
      <View style={styles.container}>
        <PhotoDetails SelectedPhoto={this.props.SelectedPhoto}
          onModalClosed={this.onModalClosed}
          onDeletePhoto={this.onDeletePhoto} />
        <View style={styles.InputContainer}>
          <TextInput onChangeText={this.placeNameChangeHandler}
            placeholder="Nombre"
            style={styles.ContainerInput}
            value={this.props.photoName} />
          <Button onPress={this.onAddPhoto}
            title="Añadir"
            style={styles.ContainerButton}
            accessibilityLabel="Añadir nuevo elemento" />
        </View>
        <PhotoList style={{ width: '100%' }}
          Photos={this.props.Photos}
          onItemLongPressed={this.onDeletePhoto}
          onPress={this.onPhotoPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  InputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'

  },
  ContainerInput: {
    width: '70%'
  },
  ContainerButton: {
    width: '30%'
  }
});
const mapStateToProps = state => {
  return {
    Photos: state.Photos.Photos,
    SelectedPhoto: state.Photos.SelectedPhoto
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addPhoto: (photoName) => dispatch(addPhoto(photoName)),
    deletePhoto: (key) => dispatch(deletePhoto(key)),
    deselectPhoto: () => dispatch(deselectPhoto()),
    selectPhoto: (photo) => dispatch(selectPhoto(photo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
