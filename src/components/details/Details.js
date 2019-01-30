import React, { Component } from 'react';
import Detail from './Detail';

class Details extends Component {
  
  render() {
  const { details, deleteDetail} = this.props
  const detailList = details.map(detail =>{
    return (
      <div class="col-sm-4">
      <Detail
        key={detail.id}
        detail={detail}
        deleteDetail={deleteDetail}
      />
      </div>
    )
  });
    return (
     <div class="row">
       {detailList}
     </div>
    );
  }
};

export default Details;
