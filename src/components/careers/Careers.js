import React, { Component } from 'react';
import Career from './Career'

class Careers extends Component {
  componentDidMount() {
    
}
  render() {
    const { careers, deleteCareer} = this.props;
    const careerList = careers.map(career => {
      return (
        <Career
            key={career.id}
            career={career}
            deleteCareer={deleteCareer}
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