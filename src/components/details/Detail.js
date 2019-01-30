import React, { Component } from 'react';

class Detail extends Component {
  handleClick = event => {
    this.props.deleteDetail(this.props.detail.id)
  }
  render() { 

    return (
      <div>
        <button onClick={this.handleClick}>Delete</button>
        Company: {this.props.detail.company}<br/>
        Date of last update:{ this.props.detail.updateDate}<br/>
        Date of last contact: {this.props.detail.lastContact}<br/>
        Contact Name: {this.props.detail.contactName}<br/>
        Contact Email:{this.props.detail.contactEmail}<br/>
        Contact Title: {this.props.detail.contactTitle}
        
        
      </div>
    );
  }

};

export default Detail;
