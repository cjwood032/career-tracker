import React, { Component } from 'react';
//import Details from './Details';

class DetailInput extends Component {
  constructor(props){
    super(props)
    this.state={
      step: 'saved'
    }
  }

  handleChange=event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addDetail({step: this.state.step, careerId: this.props.careerId })
    this.setState({
      step: 'saved'
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Application Step
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="saved">Saved</option>
              <option value="applied">Applied</option>
              <option value="firstInt">1st interview</option>
              <option value="firstFol">1st follow up</option>
              <option value="secondInt">2nd interview</option>
              <option value="secondFol">2nd follow up</option>
            </select>
          </label>
          cover letter sent<input type="file" />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default DetailInput;
