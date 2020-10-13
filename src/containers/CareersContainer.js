import React, { Component } from 'react'
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
      <div className="careerContainer">
        <CareerInput />
        <Careers careers={this.props.careers} showCareer= {this.props.showCareer} deleteCareer={this.props.deleteCareer}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    careers: state.careers
  })
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCareer: id => dispatch({type: "DELETE_CAREER", id}),
    showCareer: id => dispatch({type: "SHOW_CAREER", id}),
    fetchCareers: () => dispatch(fetchCareers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareersContainer)
