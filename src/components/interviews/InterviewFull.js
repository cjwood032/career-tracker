// company, name, date, job_title, requirements, job_description, notes, reviews, about_company
// [larger title]Date
// [small titles] name, company, job_title
//[text] about, description
// [List]requirements
// [list?]notes
// need to be able to enter notes, person's of interest? 
// need to be able to add additional notes.
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchInterviews } from '../../actions/interviewActions'
import "./Interview.css"

class InterviewFull extends Component {
  handleClick = event => {
    event.preventDefault()
    this.props.deleteInterview(this.props.interview.id)
  }
  componentDidMount() {
    this.props.fetchInterviews()
  }

  render() {
    const paramsInterviewId = parseInt(this.props.match.params.id);
    const filteredItem = this.props.interviews.filter(interview => interview.id === paramsInterviewId);
    const filteredArray = filteredItem.map(interview =>
      <div className="interview" class="text-center">
        <h1> Upcoming Interview</h1>
        <h2 className="interview-large-title"> {new Intl.DateTimeFormat('default', {
          year: 'numeric', month: 'numeric', day: 'numeric',
          hour: 'numeric', minute: 'numeric', second: 'numeric',
          hour12: false,
          timeZone: 'America/Los_Angeles'
        }).format(Date.parse(interview.date))}  </h2>
        <div class="interview-box">
          <h3 class="row"><div class="col-md-4" >Name </div><div class="col-md-4"> Company</div><div class="col-md-4">Job Title</div> </h3>
          <h2 class="row"><div class="col-md-4">{interview.name}</div><div class="col-md-4">{interview.company}</div><div class="col-md-4">{interview.job_title}</div></h2>
        </div>
        <div className="interview-text"> {interview.about}</div>
        <div class="interview-box">
          <div class="row">
            <h3 class="col-md-6">About Company </h3>
            <h3 class="col-md-6">Reviews</h3>
          </div>
          <div class="row">
            <h3 class="col-md-6"><small>{interview.about_company}</small></h3>
            <h3 class="col-md-6"><small>{interview.reviews}</small></h3>
          </div>
        </div>
        <div class="interview-box">
          <div class="row">
            <h3 class="col-md-6">Description </h3>
            <h3 class="col-md-6">Job Requirements</h3>
          </div>
          <div class="row">
            <h3 class="col-md-6"><small>{interview.job_description}</small></h3>
            <h3 class="col-md-6"><small>{interview.requirements}</small></h3>
          </div>
        </div>
        <h4>Notes</h4>
        <h4><small>{interview.notes}</small></h4>
        <button className="btn-lg btn-danger" onClick={this.handleClick}> Delete </button>

      </div>
    )
    return (
      <div className="InterviewPage">
        {filteredArray}
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return ({
    interviews: state.interviews
  })
}
const mapDispatchToProps = dispatch => {
  return {
    fetchInterviews: () => dispatch(fetchInterviews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewFull);
