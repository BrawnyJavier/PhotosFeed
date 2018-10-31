
import { ADD_PHOTO, DELETE_PHOTO, DESELECT_PHOTO, SELECT_PHOTO } from "../actions/ActionTypes";

const GetRandomImage = () => {
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    const Images = [
        'https://www.diariomotor.com/imagenes/2016/11/nuevo-mazda-cx-5-01.jpg',
        'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/2018-Mazda-CX-5-Touring-petrol-SUV-white-Mal-Flynn-1200x800-18.jpg',
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mazda-cx-5_0.jpg?itok=noaLbDLS',
        'http://media.caranddriver.com/images/media/698024/2018-mazda-cx-5-warranty-review-car-and-driver-photo-698034-s-original.jpg',
        'https://autovolostorage.blob.core.windows.net/advertimages-5410377/mazda-cx-5-2018-124.jpg?image=58715702'
    ];
    return Images[getRandomArbitrary(0, Images.length)]
}
const initialState = {
    Photos: [],
    SelectedPhoto: null
};

const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return {
                ...state,
                Photos: state.Photos.concat({
                    key: (Math.floor((Math.random() * 100) + 1)).toString(),
                    photoName: action.photoName,
                    image: {
                        uri: GetRandomImage()
                    }
                })
            };
        case DELETE_PHOTO:
            return {
                ...state,
                Photos: state.Photos.filter((p) => {
                    return p.key != action.payload
                }),
                SelectedPhoto: null
            }
        case DESELECT_PHOTO:
            return {
                ...state,
                SelectedPhoto: null
            }
        case SELECT_PHOTO:
            return {
                ...state,
                SelectedPhoto: action.payload
            }
        default:
            return state;
    }
};
export default photosReducer;