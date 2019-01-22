export function fetchCareers() {
    return (dispatch) => {
        dispatch({type: 'LOADING_CAREERS'})
        return fetch('http://localhost:3001/api/careers')
        .then(response => response.json())
        .then(careers => dispatch({ type: "FETCH_CAREERS", payload: careers}));
    };
}

export function fetchCareer(id){
    return (dispatch) => {
        return fetch( 'http://localhost:3001/api/careers/' + id)
        .then(response => response.json())
        .then(career => dispatch({ type: "SHOW_CAREER", payload: career}))
    
    };
}
const setCareers = careers => {
    return {
        type: 'GET_CAREERS_SUCCESS',
        careers
    }
}
export const getCareers = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/careers')
        .then(response => response.json())
        .then(careers => dispatch(setCareers(careers)))
    }
}