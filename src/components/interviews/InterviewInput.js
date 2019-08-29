import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createInterview} from '../../actions/interviewActions'
import {updateFormData} from '../../actions/formActions'
import "./InterviewInput.css"
class InterviewInput extends Component {


  handleChange = event => {
    const currentFormData = Object.assign({}, this.props.formData, {[event.target.name]: event.target.value})
      this.props.updateFormData(currentFormData)
    }
  

  handleSubmit = event => {
    event.preventDefault()
    this.props.createInterview(this.props.formData)
  }
  render() {
    const {company, name, date, job_title, requirements, job_description, notes, reviews, about_company} = this.props.formData
    return (
      <div>
        <h2>Plan an Interview:</h2>
        <form className="InterviewForm" onSubmit={this.handleSubmit}>
          Title<input type="text" name="name" value={name} onChange={this.handleChange}/>
          Company<input type="text" name="company" value={company} onChange={this.handleChange}/>
          Appointment time<input type="datetime-local" name="date" value={date} onChange={this.handleChange}/>
          Job Title<input type="text" name="job_title" value={job_title} onChange={this.handleChange}/><br/>
          Requirements<textarea name="requirements" value={requirements} onChange={this.handleChange} />
          Description<textarea name="job_description" value={job_description} onChange={this.handleChange} />
          Notes<textarea name="notes" value={notes} onChange={this.handleChange} />
          About Company<textarea name="about_company" value={about_company} onChange={this.handleChange} />
          Reviews<textarea name="reviews" value={reviews} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return ({
    formData: state.formData
  })
}

export default connect(mapStateToProps, {createInterview, updateFormData})(InterviewInput);
