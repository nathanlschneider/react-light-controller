import React, { Component } from 'react';
import './Room.scss';

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert(this.props.name);
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className='room' style={{ gridArea: this.props.name }
            } onClick={this.handleClick}>
                {this.props.name}
            </div >
        )
    }
}