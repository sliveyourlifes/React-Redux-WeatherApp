import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import AddCity from './containers/AddCity'
import CitiesList from './containers/CitiesList'
import './index.css';

const store = createStore(rootReducer,applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div className='test'>
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








