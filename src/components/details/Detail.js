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
        Link: <a href={this.props.detail.jobLink}>{this.props.detail.jobLink}</a>
				Title: <strong>{this.props.detail.jobTitle}</strong>
				Company: <b>{this.props.detail.company}</b><br/>
				Referral: <b>{this.props.detail.referral}</b>
        Date of last update:<b>{ this.props.detail.updated}</b><br/>
        Date of last contact: <b>{this.props.detail.contacted}</b><br/>
				Contact method: {this.props.detail.method}
        Contact Name: <b>{this.props.detail.name}</b><br/>
        Contact Email: <b>{this.props.detail.email}</b><br/>
        Contact Title: <b>{this.props.detail.role}</b>
				Contacted via:<p>{this.props.detail.action}</p>
				Next step: {this.props.detail.step}
				<p>notes</p>  
      </div>
    );
  }

};

export default Detail;
