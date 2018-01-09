export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

export let nextTodoId = 0;

export const addCity = (city) => {
    return {
        type: ADD_CITY,
        id: nextTodoId++,
        value: city,
        status: false
    }
};

export const itemsFetchDataSuccess = (temperature,status,name) => {
    return {
        type: 'CITY_FETCH_TEMP_SUCCESS',
        temperature:temperature,
        status:status,
        name:name
    };
};

export const addCityTemp = (city) =>
{
    return (dispatch) => {
        dispatch(addCity(city));

        const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        const apiKey = '&APPID=39f5c6d8741baf49c701d70f0825bfff';


        fetch(url + city + apiKey)
            .then(res => res.json())
            .then(
                (result) => {
                    const temperature = Math.round((result.main.temp - 273.15) * 100) / 100;
                    const status = true;
                    const name = result.name;
                    dispatch(itemsFetchDataSuccess(temperature,status,name))
                })

    }
};


export const deleteCity = (city) => {
    return {
        type: DELETE_CITY,
        value: city
    }
};
