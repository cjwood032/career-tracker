import React, { Component } from 'react';
import Detail from './Detail';

class Details extends Component {
  
  render() {
  const { details, deleteDetail} = this.props
  const detailList = details.map(detail =>{
    return (
      <div className="col-sm-4" key={detail.id}>
      <Detail
        key={detail.id}
        detail={detail}
        deleteDetail={deleteDetail}
      />
      </div>
    )
  });
    return (
     <div className="row">
       {detailList}
     </div>
    );
  }
};

export default Details;
