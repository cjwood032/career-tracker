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
    addCareer: (title, link, company, location, description) => dispatch({type: "ADD_CAREER", title, link, company, location, description}),
    deleteCareer: id => dispatch({type: "DELETE_CAREER", id}),
    fetchCareers: () => dispatch(fetchCareers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareersContainer)
