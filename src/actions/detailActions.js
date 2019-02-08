const addDetail = detail =>{
    return {
        type: "CREATE_DETAIL_SUCCESS",
        detail
    }
}
const resetDetailForm = () => {
    return {
        type: 'RESET_DETAIL_FORM'
    }
}
const setDetails = details => {
    return {
        type:'GET_DETAILS_SUCCESS',
        details
    }
}
export const fetchDetails = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_DETAILS'})
        return fetch('http://localhost:3001/api/details')
        .then(response => response.json())
        .then(details => dispatch(setDetails(details)))
        .catch(error => console.log(error))
    };
}
export const createDetail = (detail) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/details', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(detail)
        })
        .then(response => response.json())
        .then(detail => {dispatch(addDetail(detail))
                         dispatch(resetDetailForm())})
            .catch(error => console.log(error))
        }
    }