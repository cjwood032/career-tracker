 export const fetchSheets = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/api/API/import')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    };
}