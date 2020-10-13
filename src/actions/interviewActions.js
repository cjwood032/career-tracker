const addInterview = interview =>{
    return {
        type: "CREATE_INTERVIEW_SUCCESS",
        interview
    }
}
const resetInterviewForm = () => {
    return {
        type: 'RESET_INTERVIEW_FORM'
    }
}
const setInterviews = interviews => {
    return {
        type: 'GET_INTERVIEWS_SUCCESS',
        interviews
    }
}

export const fetchInterviews = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/v1/companies')
        .then(response => response.json())
        .then(interviews => dispatch(setInterviews(interviews)))
        .catch(error => console.log(error))
    };
}

export const createInterview = (interview) => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/v1/companies', { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(interview)
        })
        .then(response => response.json())
        .then(interview => {dispatch(addInterview(interview))
                         dispatch(resetInterviewForm())})
            .catch( error => console.log(error))
    }
}
