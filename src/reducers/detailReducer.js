function detailsReducer(state = [], action) {
    switch (action.type) {    

      case 'CREATE_DETAIL_SUCCESS':
        console.log(action.detail)
        return state.concat(action.detail)

      case 'GET_DETAILS_SUCCESS':
        return action.details

      case 'DELETE_DETAIL':
      fetch( 'http://localhost:3001/api/details/' + action.id, {
        method: 'delete'})
        const details = state.filter(detail => detail.id !== action.id);
        return  details 
  
      default:
        return state;
    }
}
export default detailsReducer