import React, { Component } from 'react';
import './Detail.css'
class Detail extends Component {
  handleClick = event => {
    this.props.deleteDetail(this.props.detail.id)
  }
  render() { 
	//if complete have the card faded out
    return (
      <div className="detailcard">
				<h4> {this.props.detail.status}</h4>
        <button onClick={this.handleClick}>Delete</button><br/>
        Link: <a href={this.props.detail.job_link}>{this.props.detail.job_link}</a>
				Title: <strong>{this.props.detail.job_title}</strong>
				Company: <b>{this.props.detail.company}</b><br/>
				Referral: <b>{this.props.detail.referral}</b>
        Date of last update:<b>{ this.props.detail.update_date}</b><br/>
        Date of last contact: <b>{this.props.detail.contact_date}</b><br/>
				Contact method: {this.props.detail.method}
        Contact Name: <b>{this.props.detail.contact_name}</b><br/>
        Contact Email: <b>{this.props.detail.contact_email}</b><br/>
        Contact Title: <b>{this.props.detail.contact_title}</b>
				Contacted via:<p>{this.props.detail.action}</p>
        <p>Status: {this.props.detail.status}</p>
				Next step: {this.props.detail.step}
				<p>notes</p>  
      </div>
    );
  }

};

export default Detail;
