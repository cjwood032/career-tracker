import React, { Component } from 'react';
import Career from './Career'

class Careers extends Component {

  render() {
    const { careers, deleteCareer, showCareer} = this.props;
    const careerList = careers.map(career => {
      return (
        <Career
            key={career.id}
            career={career}
            deleteCareer={deleteCareer}
            showCareer={showCareer}
        />
      )
    });

    return(
      <ul>
        {careerList}
      </ul>
    );
  }
};

export default Careers;