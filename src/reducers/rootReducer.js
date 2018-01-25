 const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.value,
                }
            ];
        case 'CITY_FETCH_TEMP_SUCCESS':
            let index = state.findIndex((item)=> {
                if (item.name === action.name) {
                    return item
                }
                return false;
            });
            const newState = [...state];
            newState[index] = {...state[index], temperature: action.temperature, status: action.status, pressure: action.pressure, wind:action.wind_speed};
            return newState;
        case "DELETE_CITY" :
            let ind = state.findIndex((item)=> {
                if (item.name === action.value) {
                    return item
                }
                return false;
            });
            return [
                ...state.slice(0, ind),
                ...state.slice(ind + 1)
            ];
        default:
            return state;
    }
};

export default rootReducer;