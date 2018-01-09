import React, {Component} from 'react';

class CityValue extends Component {
    render() {
        return (
            <li>
                <span>{this.props.name}</span>
                <span>{this.props.temperature}</span>
                <span className={this.props.status ? '' : 'none'}>°С</span>
                <span className="button"
                      onClick={this.props.delete}
                >{this.props.status ? 'delete' : ''}</span>
            </li>
        )
    }
}

export default CityValue;

