// Parkings Reducer

const parkingsReducerDefaultState = [];

export default (state = parkingsReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_PARKINGS':
            return action.parkings;
        default:
            return state;
    }
};