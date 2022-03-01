export const getColleges = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/colleges/')
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_COLLEGES', payload: data}))
    }
}

export const addCollege = (college) => {
    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(college)
    }
    
    return (dispatch) => {
        fetch('http://localhost:3000/colleges/', configObject)
        .then(response => response.json())
        .then(data => dispatch({type: 'ADD_COLLEGE', payload: data}))
    }
}