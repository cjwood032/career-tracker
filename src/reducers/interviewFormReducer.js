const initialState = {
    company: '',
    name: '',
    date: '',
    job_title: '',
    requirements: '',
    job_description: '',
    notes: '',
    reviews: '',
    about_company: ''
  }
  function interviewFormReducer(state = initialState, action) {
     switch(action.type) {

      case 'UPDATE_INTERVIEW_FORM_DATA':
        return action.interviewFormData
       
      case 'RESET_INTERVIEW_FORM':
        return initialState;
  
      default:
        return state
    }
  }
  export default interviewFormReducer
  