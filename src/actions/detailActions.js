

export const fetchDetails = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_DETAILS'})
        return fetch('http://localhost:3001/api/details')
        .then(response => response.json())
        .then(details => dispatch({ type: "FETCH_DETAILS", payload: details}));
    };
}