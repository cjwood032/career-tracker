import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Interview.css"

class Interview extends Component {
  handleClick= event=> {
    event.preventDefault()
    this.props.deleteInterview(this.props.interview.id)
  }
  
  render() {
    const { interview } = this.props;
    return (
      <div className="interview">
          {interview.title}  <br/>{interview.company}<br/><a href = {interview.link}>link</a><br/>
          <div className="InterviewName"><button className="btn-sm btn-link"><Link to={`/Interviews/${interview.id}`} >Show</Link></button> <button className="btn-sm btn-danger" onClick={this.handleClick}> Delete </button></div>
         
      </div>
    );
  }
};


export default (Interview);