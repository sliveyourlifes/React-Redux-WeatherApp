import React, {Component} from 'react';

class CityValue extends Component {
    render() {
        return (
            <li className='item'>
                <span className='name'>{this.props.name}</span>
                <span className='temp'>{this.props.temperature} <span className={this.props.status ? '' : 'none'}>°С</span></span>
                <span>{this.props.pressure} <span className={this.props.status ? '' : 'none'}>pHa</span></span>
                <span className={this.props.status ? '' : 'none'}>wind:<span>{this.props.wind}m/s</span></span>
                <span className="close"
                      onClick={this.props.delete}
                >{this.props.status ? 'x' : ''}</span>
            </li>
        )
    }
}

export default CityValue;

