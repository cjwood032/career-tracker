import React, { Component } from 'react';
import './Detail.css'
import {connect} from 'react-redux';
import {createDetail} from '../../actions/detailActions'
import {updateDetailFormData} from '../../actions/formActions'
// Timestamp, company, contact name and title, date, action, method contacted, is this the first time, source/referral, job title, link to announcement, notes
// actions
/*

*/
// Method contacted
/*
In-person
Phone
Video
Direct Email
LinkedIn Message
LinkedIn Contact Request

*/
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
    const {company, action, updated, contacted, email, name, role} = this.props.detailFormData
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          Company:<input type="text" name="company" value={company} onChange={this.handleChange}/>
          Contact Name:<input type="text" name="name" value={name} onChange={this.handleChange}/>
          Contact Title:<input type="text" name="role" value={role} onChange={this.handleChange}/>
          {/* Date of last update:<input type="date" name="updated" value={updated} onChange={this.handleChange}/> */}
          Date of last contact:<input type="date" name="contacted" value={contacted} onChange={this.handleChange}/>
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
          </select>
          <br/>Contact Email:<input type="text" name="email" value={email} onChange={this.handleChange}/>
          
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
