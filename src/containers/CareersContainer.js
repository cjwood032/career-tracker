import React, { Component } from 'react'
import './Career.css'
import CareerInput from '../components/careers/CareerInput'
import Careers from '../components/careers/Careers'
import {connect} from 'react-redux'
import {fetchCareers} from '../actions/careerActions'

class CareersContainer extends Component {
componentDidMount(){
  this.props.fetchCareers() 
}

  render() {
    return (
      <div class="row" name="careerContainer">
        <Careers careers={this.props.careers} showCareer= {this.props.showCareer} deleteCareer={this.props.deleteCareer}/>
        <CareerInput addCareer={this.props.addCareer}/>
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
