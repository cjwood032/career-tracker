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
        Company: {this.props.detail.company}<br/>
        Date of last update:{ this.props.detail.updated}<br/>
        Date of last contact: {this.props.detail.contacted}<br/>
        Contact Name: {this.props.detail.name}<br/>
        Contact Email:{this.props.detail.email}<br/>
        Contact Title: {this.props.detail.role}
        
        
      </div>
    );
  }

};

export default Detail;
