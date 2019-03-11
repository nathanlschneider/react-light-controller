import React, { Component } from 'react';
import './Map.scss';
import Room from '../Components/Room/Room';

export default class Map extends Component {
  render() {
    return (
      <div className='map'>
        <div className='map-content'>
          <div className='map-content-area'>
            <Room name='Entryway' id='4' />
            <Room name='Kitchen' id='2' slider={<input type='range' min='1' max='254' step='22' />} />
            <Room name='DiningRoom' id='3' slider={<input type='range' min='1' max='254' step='22' />} />
            <Room name='LivingRoom' id='6' />
            <Room name='Hallway' id='5' slider={<input type='range' min='1' max='254' step='22' />} />
            <Room name='Bathroom' id='1' slider={<input type='range' min='1' max='254' step='22' />} />
            <Room name='Spare' id='8' slider={<input type='range' min='1' max='254' step='22' />} />
            <Room name='Master' id='7' slider={<input type='range' min='1' max='254' step='22' />} />
            {/* <Room name='MasterBath' id='0' slider={<input type='range' min='1' max='254' step='22' />} /> */}
          </div>
        </div>
      </div>
    );
  }
}
