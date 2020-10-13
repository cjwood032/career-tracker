function interviewsReducer(state = [], action) {
    switch (action.type) {

      case "CREATE_INTERVIEW_SUCCESS":       
        return state.concat(action.interview)
        
      case 'DELETE_INTERVIEW':
        fetch( 'http://localhost:3001/api/v1/interviews/' + action.id, {
        method: 'delete'})
        const interviews = state.filter(interview => interview.id !== action.id);
        return interviews
  
      case 'GET_INTERVIEWS_SUCCESS':
        return action.interviews      
  
      default:
        return state;
    }
}
export default interviewsReducer