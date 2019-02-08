const initialState = {
    company: '',
    updated: "2019-01-01",
    contacted: "2019-01-01",
    email: '',
    name: '',
    role: ''
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
  