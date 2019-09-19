// company, name, date, job_title, requirements, job_description, notes, reviews, about_company
// [larger title]Date
// [small titles] name, company, job_title
//[text] about, description
// [List]requirements
// [list?]notes
// need to be able to enter notes, person's of interest? 
// need to be able to add additional notes.
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
          <div className="interview-large-title"> {interview.date}  </div>
					<div className="interview-small-title"> {interview.name} {interview.company} {interview.job_title}   </div>
					<div className="interview-text"> {interview.about} {interview.job_description}   </div>
					<ul>
					
					</ul>
					
          <div className="InterviewName"><button className="btn-sm btn-link"><Link to={`/Interviews/${interview.id}`} >Show</Link></button> <button className="btn-sm btn-danger" onClick={this.handleClick}> Delete </button></div>
         
      </div>
    );
  }
};


export default (Interview);
