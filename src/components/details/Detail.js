import React, { Component } from 'react';

class Detail extends Component {
  handleClick = event => {
    this.props.deleteDetail(this.props.detail.id)
  }
  render() {
    const { detail } = this.props

    return (
      <div>
        <li>
        {this.props.detail.step}
        {this.props.detail.updateDate}
        {this.props.detail.lastContact}
        {this.props.detail.contactEmail}
        {this.props.detail.contactName}
        {this.props.detail.contactTitle}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Detail;
