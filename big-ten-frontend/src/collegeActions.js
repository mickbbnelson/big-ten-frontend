export const getColleges = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/colleges/')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_COLLEGES', payload: data}))
    }
}