import React, {Component} from 'react';
import {connect} from 'react-redux';
import CityValue from './../components/CityValue';
import {deleteCity} from '../actions/actionCreators';


class CitiesList extends Component {
    render() {
        return (
            <ul>
                {this.props.cities.map(city =>
                    <CityValue
                        key={city.id}
                        {...city}
                        delete={()=> this.props.deleteCity(city.name)}
                    />
                )}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        cities: state
    };
};

export default connect(mapStateToProps, {deleteCity})(CitiesList)