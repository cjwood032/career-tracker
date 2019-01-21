export function fetchCareers() {
    return (dispatch) => {
        dispatch({type: 'LOADING_CAREERS'})
        return fetch('http://localhost:3001/api/careers')
        .then(response => response.json())
        .then(careers => dispatch({ type: "FETCH_CAREERS", payload: careers}));
    };
}
//const setCareer = career => {
//    return {
//      type: 'SHOW_CAREER',
//      career
//    }
//  }
export function fetchCareer(id){
    return (dispatch) => {
        return fetch( 'http://localhost:3001/api/careers/' + id)
        .then(response => response.json())
        .then(career => dispatch({ type: "SHOW_CAREER", payload: career}))
        debugger
    };
}