import React, { Component } from 'react'
import DetailInput from '../components/details/DetailInput'
import Details from '../components/details/Details'
import {connect} from 'react-redux'
import {fetchDetails} from '../actions/detailActions'
class DetailsContainer extends Component {
  componentDidMount(){
    this.props.fetchDetails()
  }
  
  render() {
    return (
      <div>
        <DetailInput />
        <Details details={this.props.details} deleteDetail={this.props.deleteDetail}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    details: state.details
  })
}

const mapDispatchToProps = dispatch => ({
   deleteDetail: id => dispatch({type: 'DELETE_DETAIL', id }),
   fetchDetails: () => dispatch(fetchDetails())
})


export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
