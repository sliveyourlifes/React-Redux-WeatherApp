import { v4 } from 'node-uuid'

export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

// export let nextTodoId = 0; nextTodoId++,

export const addCity = (city) => {
    return {
        type: ADD_CITY,
        id: v4(),
        value: city,
        status: false
    }
};

export const itemsFetchDataSuccess = (temperature,status,name,pressure,wind_speed) => {
    return {
        type: 'CITY_FETCH_TEMP_SUCCESS',
        temperature:temperature,
        status:status,
        name:name,
        pressure:pressure,
        wind_speed:wind_speed
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
                    console.log(result);
                    const temperature = Math.round((result.main.temp - 273.15));
                    const status = true;
                    const pressure = result.main.pressure;
                    const wind_speed = result.wind.speed;              
                    const name = result.name;
                    dispatch(itemsFetchDataSuccess(temperature,status,name,pressure,wind_speed))
                })

    }
};


export const deleteCity = (city) => {
    return {
        type: DELETE_CITY,
        value: city
    }
};
