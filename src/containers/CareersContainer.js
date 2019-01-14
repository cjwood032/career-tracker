import React, { Component } from 'react'
import CareerInput from '../components/careers/CareerInput'
import Careers from '../components/careers/Careers'
import {connect} from 'react-redux'
import {fetchCareers} from '../actions/careerActions'

import { Link } from 'react-router-dom';
class CareersContainer extends Component {
componentDidMount(){
  this.props.fetchCareers() 
}

  render() {
    return (
      <div>
        <button> <Link to="/Careers"> Careers </Link></button><button onClick={this.showForm}> <Link to="/Careers/CareerInput"> Add Career </Link></button>
        <div><CareerInput addCareer={this.props.addCareer}/></div>
        <Careers careers={this.props.careers} showCareer= {this.props.showCareer} deleteCareer={this.props.deleteCareer}/>
      </div>
      //  
    )
  }
}
const mapStateToProps = state => ({careers: state.careers})

const mapDispatchToProps = dispatch => {
  return {
    addCareer: (title, link, company, location, description) => dispatch({type: "ADD_CAREER", title, link, company, location, description}),
    deleteCareer: id => dispatch({type: "DELETE_CAREER", id}),
    showCareer: id => dispatch({type: "SHOW_CAREER", id}),
    fetchCareers: () => dispatch(fetchCareers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareersContainer)
