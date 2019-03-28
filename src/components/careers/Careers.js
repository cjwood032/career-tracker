import React, { Component } from 'react';
import Career from './Career'

class Careers extends Component {
 
  
    
  onClick= event => {
    let sortCareer = (careers) => {
      const careerList = [...careers]
      careerList.sort(compare) 
      function compare(a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase() ) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
      return careerList
    }
    event.preventDefault()
    var careersList=sortCareer(this.props.careers)
    this.setState({careerList: careersList})
  }
  render() {
    if (this.state !== null) {
      const { deleteCareer, showCareer} = this.props;
      var careerList = this.state.careerList.map(career => {
        return (
          <div className="col-sm-3" key={career.id}><center>
          <Career
              key={career.id}
              career={career}
              title={career.title}
              deleteCareer={deleteCareer}
              showCareer={showCareer}
          /></center>
          </div>
        )
      });
    }
    else {
    const { careers, deleteCareer, showCareer} = this.props;
    var careerList = careers.map(career => {
      return (
        <div className="col-sm-3" key={career.id}><center>
        <Career
            key={career.id}
            career={career}
            title={career.title}
            deleteCareer={deleteCareer}
            showCareer={showCareer}
        /></center>
        </div>
      )
    });
  }
    return(
    <div> <button onClick={this.onClick} >Sort</button>
      <div className="row">
       
          {careerList}
      </div>
    </div>
    );
  }
};

export default Careers;