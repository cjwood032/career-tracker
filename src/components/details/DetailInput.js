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
    const {company, action, method, first, updated, referral, jobTitle, jobLink, notes, contacted, email, name, role, step, complete, status} = this.props.detailFormData
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          Date:<input type="date" name="contacted" value={contacted} onChange={this.handleChange}/>
          Company:<input type="text" name="company" value={company} onChange={this.handleChange}/>
          Method:
          <select value={method} onChange={this.handleChange}>
            <option value ="person">In-person</option>
            <option value ="phone">Phone</option>
            <option value ="video">Video</option>
            <option value ="email">Direct Email</option>
            <option value ="message">LinkedIn Message</option>
            <option value ="contact">LinkedIn Contact Request</option>
          </select><br/>
          Contact Name:<input type="text" name="name" value={name} onChange={this.handleChange}/>
          Title:<input type="text" name="role" value={role} onChange={this.handleChange}/>
          Email:<input type="text" name="email" value={email} onChange={this.handleChange}/><br/>
          {/* <input type="date" style ={{display: 'none'}} name="updated" value={updated} onChange={this.handleChange}/>  */}
          
          Action: 
          <select value={action} onChange={this.handleChange}>
            <option value ="Net1">Networking: Outreach Email</option>
            <option value ="Net2">Networking: Meeting</option>
            <option value ="Net3">Networking: Attended a Meet-Up or Conference (Name and company of contact you met)</option>
            <option value ="Net4">Networking: Attended a Hackathon (Name and company of contact you met)</option>
            <option value ="Fup1">Followed Up on Job Application</option>
            <option value ="Fup2">Followed Up on Conversation or Interview</option>
            <option value ="Init">Initial Response/Contact from Company</option>
            <option value ="1Int1">First Interview Scheduled (phone)</option>
            <option value ="1Int2">First Interview Scheduled (in-person)</option>
            <option value ="1Int3">First Interview Completed (phone)</option>
            <option value ="1Int4">First Interview Completed (in-person)</option>
            <option value ="2Int1">Second Interview Scheduled (phone)</option>
            <option value ="2Int2">Second Interview Scheduled (in-person)</option>
            <option value ="2Int3">Second Interview Completed (phone)</option>
            <option value ="2Int4">Second Interview Completed (in-person)</option>
            <option value ="3Int1">Third Interview Scheduled (phone)</option>
            <option value ="3Int2">Third Interview Scheduled (in-person)</option>
            <option value ="3Int3">Third Interview Completed (phone)</option>
            <option value ="3Int4">Third Interview Completed (in-person)</option>
            <option value ="CC1">Code Challenge Sent from Company</option>
            <option value ="CC2">Code Challenge Completed and Submitted</option>
            <option value ="Offer">Offer Extended</option>
            <option value ="Reject">Rejection</option>
            <option value ="Accepted">Offer Accepted</option>
            <option value ="Other">Other</option>
          </select><br/>
          Source/Referral:<input type="text" name="referral" value={referral} onChange={this.handleChange}/>
          Job Title:<input type="text" name="job title" value={jobTitle} onChange={this.handleChange}/>
          Link:<input type="text" name="job link" value={jobLink} onChange={this.handleChange}/>
          <br/>First time you are contacting this company/contact?
          <select value={first} onChange={this.handleChange}>
            <option value = "yes">Yes</option>
            <option value = "no">No</option>
          </select>
          Next Step:
					<select value = {step} onChange={this.handleChange}>
						<option value="Coach">Review with coach</option>
						<option value="Thankyou">Send thank you email</option>
						<option value="Followup">Send follow-up email</option>
						<option value="meet">Try to meet in person</option>
					</select><br/>
					Action Complete?<select value={complete} onChange={this.handleChange}>
            <option value = "yes">Yes</option>
            <option value = "no">No</option>
          </select>
					Status:<select value={status} onChange={this.handleChange}>
            <option value = "warm">Warm - Actively in the interview process</option>
            <option value = "hold">On Hold - No Clear Next Steps</option>
						<option value = "cold">Cold - Have not interacted for more than 7 days</option>
						<option value = "closed">Closed- Rejected or Opportunity No Longer Available</option>
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
