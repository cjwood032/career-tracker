import React, { Component } from 'react'
import CareerInput from '../components/careers/CareerInput'
import Careers from '../components/careers/Careers'
import {connect} from 'react-redux'

class CareersContainer extends Component {

  render() {
    return (
      <div>
        add a career opening:<CareerInput addCareer={this.props.addCareer}/>
        <Careers careers={this.props.careers} deleteCareer={this.props.deleteCareer}/>
      </div>
      //  
    )
  }
}
const mapStateToProps = state => ({careers: state.careers})

const mapDispatchToProps = dispatch => {
  return {
    addCareer: (title, link) => dispatch({type: "ADD_CAREER", title, link}),
    deleteCareer: id => dispatch({type: "DELETE_CAREER", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareersContainer)
