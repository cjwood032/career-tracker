const initialState = {
  
    company: '',
    updateDate: Date(),
    lastContact: Date(),
    contactEmail: '',
    contactName: '',
    contactTitle: ''
  }
  
  function detailFormReducer(state = initialState, action) {
  
     switch(action.type) {
       case 'UPDATE_DETAIL_FORM_DATA':
        return action.detailFormData
       case 'RESET_DETAIL_FORM':
        return initialState;
  
      default:
      return state
    }
  
  
  }
  export default detailFormReducer
  