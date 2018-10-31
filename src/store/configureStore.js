import { createStore, combineReducers, compose } from 'redux';
import  photosReducers  from './reducers/photos';

const roortReducer = combineReducers({
    Photos: photosReducers
});


let composeEnhancers = compose;

if (__DEV__){
 composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
}


const configureStore = () => {
    return createStore(roortReducer, composeEnhancers());
};
export default configureStore;