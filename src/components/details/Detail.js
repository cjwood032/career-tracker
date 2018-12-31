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
          {this.props.detail.text}
        </li>
        <button onClick={this.handleClick}> X </button>
      </div>
    );
  }

};

export default Detail;
