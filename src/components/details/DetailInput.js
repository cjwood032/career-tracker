import React, { Component } from 'react';
import Details from './Details';

class DetailInput extends Component {
  constructor(props){
    super(props)
    this.state={
      step: 'saved',
      updateDate: Date() ,
      lastContact: '2001-01-01',
      contactEmail: '',
      contactName: '',
      contactTitle: ''
    }
  }

  handleChange=event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addDetail({step: this.state.step, updateDate: this.state.updateDate, lastContact: this.state.lastContact, contactEmail: this.state.contactEmail, contactName: this.state.contactName, contactTitle: this.state.contactTitle, careerId: this.props.careerId })
    this.setState({
      step: 'saved',
      updateDate: Date() ,
      lastContact: '2001-01-01',
      contactEmail: '',
      contactName: '',
      contactTitle: ''
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
          Latest update date:<input type="date" name="updateDate" onChange={this.handleChange}/>
          Date of last contact:<input type="date" name="lastContact" onChange={this.handleChange}/>
          <input type="text" name="contactEmail" onChange={this.handleChange}/>
          <input type="text" name="contactName" onChange={this.handleChange}/>
          <input type="text" name="contactTitle" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default DetailInput;
