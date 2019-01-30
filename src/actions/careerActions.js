export function fetchCareers() {
    return (dispatch) => {
        dispatch({type: 'LOADING_CAREERS'})
        return fetch('http://localhost:3001/api/careers')
        .then(response => response.json())
        .then(careers => dispatch({ type: "FETCH_CAREERS", payload: careers}));
    };
}

