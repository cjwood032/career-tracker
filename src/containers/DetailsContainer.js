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
        <DetailInput addDetail={this.props.addDetail}/>
        <Details details={this.props.details} deleteDetail={this.props.deleteDetail}/>
      </div>
    )
  }
}

const mapStateToProps = ({details}) => {
  return {details}
}

const mapDispatchToProps = dispatch => ({
   addDetail: (detail) => dispatch({type: "ADD_DETAIL", detail}),
   deleteDetail: id => dispatch({type: 'DELETE_DETAIL', id }),
   fetchDetails: () => dispatch(fetchDetails())
})


export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
// return to line 11 