function careersReducer(state = [], action) {
    switch (action.type) {

      case "CREATE_CAREER_SUCCESS":       
        return state.concat(action.career)
        
      case 'DELETE_CAREER':
        fetch( 'http://localhost:3001/api/careers/' + action.id, {
        method: 'delete'})
        const careers = state.filter(career => career.id !== action.id);
        return careers
  
      case 'GET_CAREERS_SUCCESS':
        return action.careers      
  
      default:
        return state;
    }
}
export default careersReducer