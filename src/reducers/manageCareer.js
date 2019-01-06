
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageCareers(state = {
    careers: [],
    details: [],
  }, action) {
    switch (action.type) {
  
      case 'ADD_CAREER':
        const career = { title: action.title, link: action.link, company: action.company, location: action.location, description: action.description, id: cuidFn()};
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
