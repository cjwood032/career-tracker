import React, { Component } from 'react';
//import Details from './Details';

class DetailInput extends Component {
  constructor(props){
    super(props)
    this.state={
      text: ''
    }
  }

  handleChange=event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addDetail({text: this.state.text, careerId: this.props.careerId })
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default DetailInput;
