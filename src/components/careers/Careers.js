import React, { Component } from 'react';
import Career from './Career'

class Careers extends Component {

  render() {
    const { careers, deleteCareer, showCareer} = this.props;
    const careerList = careers.map(career => {
      return (
        <div className="col-sm-3" key={career.id}><center>
        <Career
            key={career.id}
            career={career}
            deleteCareer={deleteCareer}
            showCareer={showCareer}
        /></center>
        </div>
      )
    });

    return(
      <div className="row">
          {careerList}
      </div>
    );
  }
};

export default Careers;