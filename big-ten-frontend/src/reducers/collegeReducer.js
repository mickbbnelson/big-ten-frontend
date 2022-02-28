export default function collegeReducer(state, action){
    switch (action.type) {
        case 'GET_COLLEGES':
        return action.payload;

        default:
            return state;
    }
}