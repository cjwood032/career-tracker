import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSheets} from '../actions/sheetActions'
import {saveSheets} from '../actions/sheetActions'

class Sheets extends Component {
    loadAPI= event => {
        event.preventDefault();
        this.props.fetchSheets();
    }
    saveAPI= event => {
        event.preventDefault();
        this.props.saveSheets();
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
const mapStateToProps = state => {
    return ({
      sheets: state.sheets
    })
  }
const mapDispatchToProps = dispatch => {
    return {
      fetchSheets: () => dispatch(fetchSheets()),
      saveSheets: () => dispatch(saveSheets())
  }}
export default connect(mapStateToProps, mapDispatchToProps)(Sheets)