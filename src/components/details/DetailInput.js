import React, { Component } from 'react';
import './Detail.css'
import {connect} from 'react-redux';
import {createDetail} from '../../actions/detailActions'
import {updateDetailFormData} from '../../actions/formActions'
// Timestamp, company, contact name and title, date, action, method contacted, is this the first time, source/referral, job title, link to announcement, notes

class DetailInput extends Component {
  handleChange = event => {
    const currentFormData = Object.assign({}, this.props.detailFormData, {[event.target.name]: event.target.value})
      this.props.updateDetailFormData(currentFormData)
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.createDetail(this.props.detailFormData)
    }
  render() {
    const {company, action, method, first_contact, update_date, referral, job_title, job_link, notes, contact_date, contact_email, contact_name, contact_title, step, complete, status} = this.props.detailFormData
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          Date:<input type="date" name="contact_date" value={contact_date} onChange={this.handleChange}/>
          Company:<input type="text" name="company" value={company} onChange={this.handleChange}/>
          Method:
          <select value={method} onChange={this.handleChange}>
            <option value ="In-person">In-person</option>
            <option value ="Phone">Phone</option>
            <option value ="Video">Video</option>
            <option value ="Direct Email">Direct Email</option>
            <option value ="LinkedIn Message">LinkedIn Message</option>
            <option value ="LinkedIn Contact Request">LinkedIn Contact Request</option>
          </select><br/>
          Contact Name:<input type="text" name="contact_name" value={contact_name} onChange={this.handleChange}/>
          Title:<input type="text" name="contact_title" value={contact_title} onChange={this.handleChange}/>
          Email:<input type="text" name="contact_email" value={contact_email} onChange={this.handleChange}/><br/>
          {/* <input type="date" style ={{display: 'none'}} name="update_date" value={update_date} onChange={this.handleChange}/>  */}
          
          Action: 
          <select value={action} onChange={this.handleChange}>
            <option value = "Networking: Outreach Email">Networking: Outreach Email</option>
            <option value ="Networking: Meeting">Networking: Meeting</option>
            <option value ="Networking: Attended a Meet-Up or Conference (Name and company of contact you met)">Networking: Attended a Meet-Up or Conference (Name and company of contact you met)</option>
            <option value ="Attended a Hackathon (Name and company of contact you met)">Networking: Attended a Hackathon (Name and company of contact you met)</option>
            <option value ="Followed Up on Job Application">Followed Up on Job Application</option>
            <option value ="Followed Up on Conversation or Interview">Followed Up on Conversation or Interview</option>
            <option value ="Initial Response/Contact from Company">Initial Response/Contact from Company</option>
            <option value ="First Interview Scheduled (phone)">First Interview Scheduled (phone)</option>
            <option value ="First Interview Scheduled (in-person)">First Interview Scheduled (in-person)</option>
            <option value ="First Interview Completed (phone)">First Interview Completed (phone)</option>
            <option value ="First Interview Completed (in-person)">First Interview Completed (in-person)</option>
            <option value ="Second Interview Scheduled (phone)">Second Interview Scheduled (phone)</option>
            <option value ="Second Interview Scheduled (in-person)">Second Interview Scheduled (in-person)</option>
            <option value ="Second Interview Completed (phone)">Second Interview Completed (phone)</option>
            <option value ="Second Interview Completed (in-person)">Second Interview Completed (in-person)</option>
            <option value ="Third Interview Scheduled (phone)">Third Interview Scheduled (phone)</option>
            <option value ="Third Interview Scheduled (in-person)">Third Interview Scheduled (in-person)</option>
            <option value ="Third Interview Completed (phone)">Third Interview Completed (phone)</option>
            <option value ="Third Interview Completed (in-person)">Third Interview Completed (in-person)</option>
            <option value ="Code Challenge Sent from Company">Code Challenge Sent from Company</option>
            <option value ="Code Challenge Completed and Submitted">Code Challenge Completed and Submitted</option>
            <option value ="Offer Extended">Offer Extended</option>
            <option value ="Rejection">Rejection</option>
            <option value ="Offer Accepted">Offer Accepted</option>
            <option value ="Other">Other</option>
          </select><br/>
          Source/Referral:<input type="text" name="referral" value={referral} onChange={this.handleChange}/>
          Job Title:<input type="text" name="job title" value={job_title} onChange={this.handleChange}/>
          Link:<input type="text" name="job link" value={job_link} onChange={this.handleChange}/>
          <br/>First time you are contacting this company/contact?
          <select value={first_contact} onChange={this.handleChange}>
            <option value = "yes">Yes</option>
            <option value = "no">No</option>
          </select>
          Next Step:
					<select value = {step} onChange={this.handleChange}>
						<option value="Review with Coach">Review with coach</option>
						<option value="Send thank you email">Send thank you email</option>
						<option value="Send follow-up email">Send follow-up email</option>
						<option value="Try to meet in person">Try to meet in person</option>
					</select><br/>
					Action Complete?<select value={complete} onChange={this.handleChange}>
            <option value = "yes">Yes</option>
            <option value = "no">No</option>
          </select>
					Status:<select value={status} onChange={this.handleChange}>
            <option value = "Warm - Actively in the interview process">Warm - Actively in the interview process</option>
            <option value = "On Hold - No Clear Next Steps">On Hold - No Clear Next Steps</option>
						<option value = "Cold - Have not interacted for more than 7 days">Cold - Have not interacted for more than 7 days</option>
						<option value = "Closed- Rejected or Opportunity No Longer Available">Closed- Rejected or Opportunity No Longer Available</option>
          </select><br/>
          Notes:<textarea name="notes" value={notes} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return ({
    detailFormData: state.detailFormData
  })
}
export default connect(mapStateToProps, {createDetail, updateDetailFormData})(DetailInput);
