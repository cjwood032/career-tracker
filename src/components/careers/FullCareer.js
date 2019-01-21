import React, { Component } from 'react';
import DetailsContainer from '../../containers/DetailsContainer'
import {connect} from 'react-redux'
import {fetchCareers} from '../../actions/careerActions'
class FullCareer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
   this.props.fetchCareers() 
  }
  
  render() {
    const paramsCareerId= parseInt(this.props.match.params.id)

    const filteredItem = this.props.careers.filter(career => career.id===paramsCareerId)

    const filteredArray = filteredItem.map(career =>
      <div className="CareerContainer" key={career.id}>
      <p className="CareerName" src={career.title}/>
      <h4 className="CareerLink"> {career.link} </h4>
      <p className="CareerDescription"> {career.description} </p>
      </div>
    )

    return (
      <div className="CareerPage">
        {filteredArray}
        
      </div>
      )
  }
};

const mapStateToProps = (state) => {
  return({
  career: state.career
  })
}

export default connect(mapStateToProps, {fetchCareers}) (FullCareer);
// return to line 18<DetailsContainer career={career}/>