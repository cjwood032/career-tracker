import {combineReducers} from 'redux';
import careersReducer from './manageCareer'
import detailFormReducer from './detailFormReducer'
import formDataReducer from  './formReducer'
import detailsReducer from './detailReducer'

export default combineReducers({
    careers: careersReducer,
    details: detailsReducer,
    formData: formDataReducer,
    detailFormData: detailFormReducer
})