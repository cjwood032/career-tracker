import React, { Component } from 'react';
import Detail from './Detail';

class Details extends Component {
  render() {
    const associatedDetails = this.props.details.filter(detail=> detail.careerId === this.props.careerId)
    const renderDetails = associatedDetails.map((detail, index) => <Detail key={index} detail={detail} deleteDetail={this.props.deleteDetail}/>)
    return (
      <ul>
        {renderDetails}
      </ul>
    );
  }
};

export default Details;