import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createInterview} from '../../actions/interviewActions'
import {updateInterviewFormData} from '../../actions/formActions'
import "./InterviewInput.css"
class InterviewInput extends Component {


  handleChange = event => {
    const currentFormData = Object.assign({}, this.props.interviewFormData, {[event.target.name]: event.target.value})
      this.props.updateInterviewFormData(currentFormData)
    }
  

  handleSubmit = event => {
    event.preventDefault()
    this.props.createInterview(this.props.interviewFormData)
  }
  render() {
    const {company, name, date, job_title, requirements, job_description, notes, reviews, about_company} = this.props.interviewFormData
    return (
      <div>
        
        <form className="interview-form" onSubmit={this.handleSubmit}>
        <h2>Plan an Interview:</h2>
          <div class="row">Name<input type="text" name="name" value={name} onChange={this.handleChange}/></div>
          <div class="row">Company<input type="text" name="company" value={company} onChange={this.handleChange}/></div>
          <div class="row">Interview Time<input type="datetime-local" name="date" value={date} onChange={this.handleChange}/></div>
          <div class="row">Job Title<input type="text" name="job_title" value={job_title} onChange={this.handleChange}/></div>
          <div class="row">Requirements<textarea name="requirements" value={requirements} onChange={this.handleChange} /></div>
          <div class="row">Description<textarea name="job_description" value={job_description} onChange={this.handleChange} /></div>
          <div class="row">Notes<textarea name="notes" value={notes} onChange={this.handleChange} /></div>
          <div class="row">About Company<textarea name="about_company" value={about_company} onChange={this.handleChange} /></div>
          <div class="row">Reviews<textarea name="reviews" value={reviews} onChange={this.handleChange} /></div>
          <input type="submit" />
        </form>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return ({
    interviewFormData: state.interviewFormData
  })
}

export default connect(mapStateToProps, {createInterview, updateInterviewFormData})(InterviewInput);
