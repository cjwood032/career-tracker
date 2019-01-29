

export default function manageCareers(state = {
    careers: [],
    details: [],
  }, action) {
    switch (action.type) {
  
      case 'ADD_CAREER':
        const career = { title: action.title, link: action.link, company: action.company, location: action.location, description: action.description};
        fetch('http://localhost:3001/api/careers', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: career.title,
          link: career.link,
          company: career.company,
          location: career.location,
          description: career.description,
          
        })
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
        return { ...state, careers: state.careers.concat(career)}
  
      case 'DELETE_CAREER':
        fetch( 'http://localhost:3001/api/careers/' + action.id, {
        method: 'delete'})
        const careers = state.careers.filter(career => career.id !== action.id);
        return { ...state, careers}
      
      case 'LOADING_CAREERS':
        return {...state, loading: true}
      case 'FETCH_CAREERS':
        return {loading: false, careers: action.payload}
      case 'SHOW_CAREER':
        debugger
        return {career: action.payload}
      case 'LOADING_DETAILS':
        return {...state, loading: true}
      case 'FETCH_DETAILS':
        return {loading: false, details: action.payload}
      case 'ADD_DETAIL':
      // step, updateDate, lastContact, contactEmail, contanctName, contactTitle
        const detail = { step: action.detail.step, updateDate: action.detail.updateDate, lastContact: action.detail.lastContact, contactEmail: action.detail.contactEmail, contanctName: action.detail.contactName, contactTitle: action.detail.contactTitle, careerId: action.detail.careerId, };
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
