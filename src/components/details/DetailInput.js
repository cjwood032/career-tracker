import React, { Component } from 'react';


class DetailInput extends Component {
  constructor(props){
    super(props)
    this.state={
      company: '',
      updateDate: Date() ,
      lastContact: Date(),
      contactEmail: '',
      contactName: '',
      contactTitle: ''
    }
  }

  handleChange=event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addDetail({step: this.state.step, company: this.state.company, updateDate: this.state.updateDate, lastContact: this.state.lastContact, contactEmail: this.state.contactEmail, contactName: this.state.contactName, contactTitle: this.state.contactTitle, careerId: this.props.careerId })
    this.setState({
      company: '',
      updateDate: Date() ,
      lastContact: Date(),
      contactEmail: '',
      contactName: '',
      contactTitle: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Company:<input type="text" name="company" onChange={this.handleChange}/>
        
          
          Date of last update:<input type="date" name="updateDate" onChange={this.handleChange}/>
          Date of last contact:<input type="date" name="lastContact" onChange={this.handleChange}/>
          <br/>Contact Email:<input type="text" name="contactEmail" onChange={this.handleChange}/>
          Contact Name:<input type="text" name="contactName" onChange={this.handleChange}/>
          Contact Title:<input type="text" name="contactTitle" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default DetailInput;
