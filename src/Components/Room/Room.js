import React, { Component } from 'react';
import { Button, Slider } from 'antd';
import Loader from '../Loader/Loader';
// import Slider from '../Slider/Slider';
import './Room.scss';
import 'antd/dist/antd.css';

const username = 'wQw5uy-TR-jaNQdZblznURuGP43lpCFiJhCq9Um-';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: null,
      bri: 1,
      tempBri: 0,
      disabled: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.turnLightOn = this.turnLightOn.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAfterChange = this.handleAfterChange.bind(this);
  }

  turnLightOn(state) {
    fetch(`http://10.0.0.3/api/${username}/groups/${this.props.id}/action`, {
      method: 'PUT',
      body: JSON.stringify({ on: state })
    });
  }

  handleOnChange(e) {
    fetch(`http://10.0.0.3/api/${username}/groups/${this.props.id}/action`, {
      method: 'PUT',
      body: JSON.stringify({ bri: Math.round(e) })
    });
    this.setState({ tempBri: e });
  }

  handleAfterChange() {
    this.setState({ bri: this.state.tempBri });
  }

  handleClick() {
    this.state.isOn ? this.turnLightOn(false) : this.turnLightOn(true);
  }

  doSetInterval() {
    this.intervalId = setInterval(() => {
      fetch(`http://10.0.0.3/api/${username}/groups/${this.props.id}`, { mode: 'cors' })
        .then(res => res.text())
        .then(text => JSON.parse(text))
        .then(json => this.setState({ isOn: json.state.any_on, bri: json.action.bri }))
        .catch(error => console.error('Error:', error));
    }, 1000);
  }
  componentDidMount() {
    fetch(`http://10.0.0.3/api/${username}/groups/${this.props.id}`, { mode: 'cors' })
      .then(res => res.text())
      .then(text => JSON.parse(text))
      .then(json => this.setState({ isOn: json.state.any_on, tempBri: json.action.bri }))
      .catch(error => console.error('Error:', error));
    this.doSetInterval();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <div
          className='room'
          style={{
            gridArea: this.props.name,
            backgroundColor: this.state.isOn ? 'var(--yellow)' : 'var(--medium)'
          }}
        >
          {this.props.name}
          <Button className='room-title' onClick={this.handleClick}>
            {this.state.isOn ? 'Turn Off' : 'Turn On'}
          </Button>
          <Slider
            style={{ width: '100px' }}
            min={1}
            max={255}
            step={254 / 5}
            value={this.state.tempBri}
            disabled={!this.state.isOn}
            onChange={this.handleOnChange}
            onAfterChange={this.handleAfterChange}
          />
          <Loader />
        </div>
      </>
    );
  }
}
