import React, { Component } from 'react'
import DetailInput from '../components/details/DetailInput'
//import Details from '../components/details/Details'
import {connect} from 'react-redux'
class DetailsContainer extends Component {

  render() {
    return (
      <div>
        <DetailInput addDetail={this.props.addDetail} careerId={this.props.career.id}/>
        
      </div>
    )
  }
}

const mapStateToProps = ({details}) => {
  return {details}
}

const mapDispatchToProps = dispatch => ({
   addDetail: detail => dispatch({type: 'ADD_DETAIL', detail }),
   deleteDetail: id => dispatch({type: 'DELETE_DETAIL', id })
})


export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
// return to line 11 <Details details={this.props.details} careerId={this.props.career.id} deleteDetail={this.props.deleteDetail}/>