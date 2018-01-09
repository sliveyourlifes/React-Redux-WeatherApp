import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addCityTemp} from '../actions/actionCreators'


class AddCity extends Component {
    state = {
        value: ''
    };

    handleChange = (e)=> {
        e.preventDefault();
        this.setState({value: e.target.value});
    };

    render() {
        return (
            <div>
                <input className="input"
                       type="text"
                       placeholder="Enter City"
                       onChange={this.handleChange}
                       value={this.state.value}
                />
                <button onClick={()=> {
                    return (
                        this.props.addCityTemp(this.state.value),
                            this.setState({value: ''})
                    )
                }}>
                    Add City
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state
    };
};


export default connect(mapStateToProps, {addCityTemp})(AddCity)