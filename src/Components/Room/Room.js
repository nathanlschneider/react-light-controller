import React, { Component } from 'react';
import './Room.scss';
const username = 'wQw5uy-TR-jaNQdZblznURuGP43lpCFiJhCq9Um-',
  headers = new Headers({ 'Access-Control-Allow-Origin': '*' });

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   
  }

  componentDidMount() {
    let runner = setInterval(() => {
      fetch(`http://10.0.0.3/api/${username}/groups/${this.props.id}`, { mode: 'cors' })
        .then(res => res.text())
        .then(json => JSON.parse(json))
        .then(json => this.setState({ isOn: json.state.any_on }));
    }, 2000);
  }
  render() {
    return (
      <div
        className='room'
        style={{ gridArea: this.props.name, backgroundColor: this.state.isOn ? 'var(--yellow)' : 'var(--medium)' }}
        onClick={this.handleClick}
      >
        {this.props.name}
      </div>
    );
  }
}
