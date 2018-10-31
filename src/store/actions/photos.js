import { ADD_PHOTO, DELETE_PHOTO, SELECT_PHOTO, DESELECT_PHOTO } from './ActionTypes';

export const addPhoto = (photoName) => {
    return {
        type: ADD_PHOTO,
        payload: photoName
    };
};
export const deletePhoto = (key) => {
    return {
        type: DELETE_PHOTO,
        payload : key
    };
};
export const selectPhoto = (photo) => {
    return {
        type: SELECT_PHOTO,
        payload: photo
    }
};
export const deselectPhoto = ()=>{
    return {
        type: DESELECT_PHOTO
    };
}