

function detailsReducer(state = [], action) {
    switch (action.type) {    
      case 'LOADING_DETAILS':
        return {...state, loading: true}
      case 'FETCH_DETAILS':
        return {...state, loading: false, details: action.payload}
      case 'ADD_DETAIL':
  
        const detail = { company: action.detail.company, step: action.detail.step, updateDate: action.detail.updateDate, lastContact: action.detail.lastContact, contactEmail: action.detail.contactEmail, contanctName: action.detail.contactName, contactTitle: action.detail.contactTitle, careerId: action.detail.careerId, };
        fetch('http://localhost:3001/api/details', { 
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            company: detail.company,
            step: detail.step,
            update_date: detail.updateDate,
            last_contact: detail.lastContact,
            contact_email: detail.contactEmail,
            contact_name: detail.contactName,
            contact_title: detail.contactTitle
            
          })
        })
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body)
        });
        return { ...state, details: state.details.concat(detail) }
  
      case 'DELETE_DETAIL':
      fetch( 'http://localhost:3001/api/details/' + action.id, {
        method: 'delete'})
        const details = state.details.filter(detail => detail.id !== action.id);
        return {...state, details }
  
      default:
        return state;
    }
}
export default detailsReducer