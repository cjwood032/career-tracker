import React, { Component } from 'react';
import Documents from './Documents';

class DocumentInput extends Component {
  constructor(props){
    super(props)
    this.state={
      resume: '',
      coverLetter: ''
    }
  }

  handleChange=event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.uploadDocument({resume: this.state.resume, coverLetter: this.props.coverLetter })
    this.setState({
      step: 'saved'
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          resume: <input type="file" name = "resume"/>
          cover letter: <input type="file" name = "coverLetter" />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default DocumentInput;
