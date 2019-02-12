import React, { Component } from 'react';
import './Map.scss';
import Room from '../Components/Room/Room';


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    render() {
        return (
            <div className="map">
                <div className="map-content">
                    <div className="map-content-area">
                        <Room name="Entryway" id="4"/>
                        <Room name="Kitchen" id="2"/>
                        <Room name="DiningRoom" id="3"/>
                        <Room name="LivingRoom" id="6"/>
                        <Room name="Hallway" id="5"/>
                        <Room name="Bathroom" id="1"/>
                        <Room name="Spare" id="8"/>
                        <Room name="Master" id="7"/>
                        <Room name="MasterBath" id="0"/>
                    </div>
                </div>
            </div>
        )
    }

}