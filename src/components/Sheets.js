import React, { Component } from 'react';
import {connect} from 'react-redux'

class Sheets extends Component {
    loadAPI= event => {
        event.preventDefault();
        console.log("Loading");   
    }
    saveAPI= event => {
        event.preventDefault();
        console.log("Saving");
    }
    render () {
        return (
            <div className = "Sheets-Buttons">
                <h2>Load and save API</h2>
                <button onClick={this.loadAPI} >Load from Sheets</button>
                <button onClick={this.saveAPI} >Update Sheets</button>
            </div>
        )
    }

}
export default (Sheets)