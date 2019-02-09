import React, { Component } from 'react';
import './Map.scss';
import Room from '../Components/Room/Room';
const username = 'wQw5uy-TR-jaNQdZblznURuGP43lpCFiJhCq9Um-';


export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    // componentDidMount(){
    //     fetch(`api/${username}/groups`)
    //     .then(data => this.setState({data: data}))
    // }
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
                        <Room name="MasterBath" id=""/>
                    </div>
                </div>
            </div>
        )
    }

}