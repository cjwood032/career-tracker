import React, { Component } from 'react';
import Career from './Career'

class Careers extends Component {

  render() {
    const { careers, deleteCareer, showCareer} = this.props;
    const careerList = careers.map(career => {
      return (
        <div className="col-sm-4" key={career.id}>
        <Career
            key={career.id}
            career={career}
            deleteCareer={deleteCareer}
            showCareer={showCareer}
        />
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