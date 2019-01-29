import React, { Component } from 'react';
import Detail from './Detail';

class Details extends Component {
  
  render() {
  const { details, deleteDetail} = this.props
  const detailList = details.map(detail =>{
    return (
      <Detail
        key={detail.id}
        detail={detail}
        deleteDetail={deleteDetail}
      />
    )
  });
    return (
     <ul>
       {detailList}
     </ul>
    );
  }
};

export default Details;
