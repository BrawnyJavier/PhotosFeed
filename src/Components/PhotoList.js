import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PhotoItem from './PhotoItem';

const PhotoList = props => {
    return (
        <FlatList style={Styles.PhotoList}
            data={props.Photos}
            renderItem={(info) => (
                <PhotoItem
                    onPress={props.onPress}
                    photo={info.item}
                    onLongPress={() => { props.onItemLongPressed(info.item.key) }} />
            )}
        />
    )
}
const Styles = StyleSheet.create({
    PhotoList: {
        width: '100%',
        padding: 10
    }
});
export default PhotoList;