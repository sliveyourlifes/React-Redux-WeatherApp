import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import AddCity from './containers/AddCity'
import CitiesList from './containers/CitiesList'
import {loadState ,saveState} from './localStorage'
import './styles/index.css';

const persistedState = loadState();
const store = createStore(rootReducer,persistedState,applyMiddleware(thunk));

store.subscribe(()=> {
    saveState(store.getState());
})

class App extends Component {
    render() {
        return (
            <div className='main-wrapper'>
            <h1>Weather in your city</h1>
                <AddCity/>
                <CitiesList/>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);








