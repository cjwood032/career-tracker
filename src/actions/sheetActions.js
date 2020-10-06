 export const fetchSheets = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/v1/API/import')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    };
}
export const saveSheets = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/v1/API/export')
        .then(response=>response.json())
    }
}