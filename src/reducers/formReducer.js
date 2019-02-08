const initialState = {
    title: '',
    company: '',
    location: '',
    link: '',
    description: ''
  }
  
  function formDataReducer(state = initialState, action) {
     switch(action.type) {

       case 'UPDATE_FORM_DATA':
        return action.formData

       case 'RESET_FORM':
        return initialState;
  
      default:
        return state
    }
  }
  export default formDataReducer
  