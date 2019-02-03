import React, { Component } from 'react';
import './Map.scss';
import Room from '../Components/Room/Room';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            null: null
        }
    }
    render() {
        return (
            <div className="map">
                <div className="map-content">
                    <div className="map-content-area">
                        <Room name="entry" />
                        <Room name="kitchen" />
                        <Room name="dinning" />
                        <Room name="living" />
                        <Room name="hall" />
                        <Room name="bath" />
                        <Room name="spare" />
                        <Room name="master" />
                        <Room name="master-bath" />
                    </div>
                </div>
            </div>
        )
    }

}