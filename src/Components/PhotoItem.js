import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PhotoItem = (props) => {
    return (
        <TouchableOpacity style={{ marginBottom: 10 }}
            onLongPress={props.onLongPress}
            onPress={()=>props.onPress(props.photo)}>
            <View style={Styles.PhotoItem}>
                <Image  source={props.photo.image}
                    style={Styles.PhotoImage} />
                <Text>{props.photo.photoName}</Text>
            </View>
        </TouchableOpacity>
    );
}
const Styles = StyleSheet.create({
    PhotoItem: {
        width: '100%',
        padding: 10,
        paddingBottom: 20,
        backgroundColor: '#ececec',
        flexDirection: 'column',
        alignItems: 'center'
    },
    PhotoImage: {
        width: 220,
        height: 220
    }
})
export default PhotoItem;