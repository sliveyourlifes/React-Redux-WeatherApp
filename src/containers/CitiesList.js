import React, {Component} from 'react';
import {connect} from 'react-redux';
import CityValue from './../components/CityValue';
import {deleteCity} from '../actions/actionCreators';


class CitiesList extends Component {
    render() {
        return (
            <div className='list-wrapper'>
                <ul className='list-block'>
                    {this.props.cities.map(city =>
                        <CityValue
                            key={city.id}
                            {...city}
                            delete={()=> this.props.deleteCity(city.name)}
                        />
                    )}
                </ul>
            </div>
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