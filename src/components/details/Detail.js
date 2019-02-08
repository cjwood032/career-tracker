import React, { Component } from 'react';
import './Detail.css'
class Detail extends Component {
  handleClick = event => {
    this.props.deleteDetail(this.props.detail.id)
  }
  render() { 

    return (
      <div className="detailcard">
        <button onClick={this.handleClick}>Delete</button><br/>
        Company: <b>{this.props.detail.company}</b><br/>
        Date of last update:<b>{ this.props.detail.updated}</b><br/>
        Date of last contact: <b>{this.props.detail.contacted}</b><br/>
        Contact Name: <b>{this.props.detail.name}</b><br/>
        Contact Email: <b>{this.props.detail.email}</b><br/>
        Contact Title: <b>{this.props.detail.role}</b>
        
        
      </div>
    );
  }

};

export default Detail;
