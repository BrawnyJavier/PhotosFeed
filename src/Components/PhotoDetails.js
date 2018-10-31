import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PhotoDetail = props => {
    let Content = null;
    if (props.SelectedPhoto) {
        Content = (
            <View style={Styles.ModalContent}>
                <Image style={Styles.PhotoImage}
                    source={props.SelectedPhoto.image} />
                <Text style={Styles.PhotoName}>{props.SelectedPhoto.photoName}</Text>
            </View>
        )
    }
    return (
        <Modal visible={props.SelectedPhoto != null}
            animationType="slide"
            onRequestClose={props.onModalClosed}>
            <View style={Styles.ModalContent}>
                {Content}
                <View style={Styles.ModalContent}>
                    <TouchableHighlight>
                        <Icon size={30} name="ios-trash" color="red"/>
                    </TouchableHighlight>
                    <Button title="Borrar"
                        color="red"
                        style={{ marginBottom: 10 }}
                        onPress={() => props.onDeletePhoto(props.SelectedPhoto.key)} />
                    <Button title="Cerrar"
                        onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    )
};

const Styles = StyleSheet.create({
    ModalContent: {
        margin: 22,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    PhotoImage: {
        width: 220,
        height: 220
    },
    PhotoName: {
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center',
        color: '#2a87de'
    }
})

export default PhotoDetail;