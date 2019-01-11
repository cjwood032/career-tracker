
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageCareers(state = {
    careers: [],
    details: [],
  }, action) {
    switch (action.type) {
  
      case 'ADD_CAREER':
        const career = { title: action.title, link: action.link, company: action.company, location: action.location, description: action.description, id: cuidFn()};
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
          id: career.id

        })
      })
      .then(function(response) {
        //debugger
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
        return { ...state, careers: state.careers.concat(career)}
  
      case 'DELETE_CAREER':
        const careers = state.careers.filter(career => career.id !== action.id);
        return { ...state, careers}
  
      case 'ADD_DETAIL':
  
        const detail = { text: action.detail.text, careerId: action.detail.careerId, id: cuidFn() };
        return { ...state, details: state.details.concat(detail) }
  
      case 'DELETE_DETAIL':
        const details = state.details.filter(detail => detail.id !== action.id);
        return {...state, details }
  
      default:
        return state;
    }
}
