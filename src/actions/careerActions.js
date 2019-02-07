const addCareer = career =>{
    return {
        type: "CREATE_CAREER_SUCCESS",
        career
    }
}
const resetCareerForm = () => {
    return {
        type: 'RESET_FORM'
    }
}
const setCareers = careers => {
    return {
        type: 'GET_CAREERS_SUCCESS',
        careers
    }
}

export const fetchCareers = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/careers')
        .then(response => response.json())
        .then(careers => dispatch(setCareers(careers)))
        .catch(error => console.log(error))
    };
}

export const createCareer = (career) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/careers', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(career)
        })
        .then(response => response.json())
        .then(career => {dispatch(addCareer(career))
                         dispatch(resetCareerForm())})
            .catch( error => console.log(error))
    }
}
