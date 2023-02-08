
import { combineReducers } from 'redux';
import { languageReducer } from './language';
import { loaderReducer } from './loader';
import { articlesReducer } from './articles';


export default combineReducers({
    language: languageReducer,
})