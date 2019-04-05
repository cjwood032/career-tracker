const initialState = {
    company: '',
    update_date: "2019-01-01",
    contact_date: "2019-01-01",
    contact_email: '',
    contact_name: '',
    contact_title: '',
    action: 'Initial Response/Contact from Company',
    method: 'In-person',
    first: 'yes',
    referral: '',
    job_title: '',
    job_link: '',
    notes: ''
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
  