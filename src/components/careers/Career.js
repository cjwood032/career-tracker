import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {fetchCareer} from '../../actions/careerActions'
import {connect} from 'react-redux'
import DetailsContainer from '../../containers/DetailsContainer'
class Career extends Component {
  handleClick= event=> {
    event.preventDefault()
    this.props.deleteCareer(this.props.career.id)
  }
  handleCareer= event=> {
    event.preventDefault()
    this.props.fetchCareer(this.props.career.id)
    //this.props.showCareer(this.props.career.id)
  }
  render() {
    const { career } = this.props;
    return (
      <div>
        <li>
          Title:{career.title}  <a href = {career.link}>link</a>
          <button onClick={this.handleClick}> Delete </button>
          <div className="CareerName"><button onClick={this.handleCareer}><NavLink to={`/Careers/${career.id}`} style={{textDecoration: 'none'}}>Show</NavLink></button></div>
          
        </li>
      </div>
    );
  }
};
const mapStateToProps = state => {
  //return { careerDetail: state.career.detail }
}
const mapDispatchToProps = dispatch => {
  return { fetchCareer: id => dispatch(fetchCareer(id)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Career);
// return to line 21 <DetailsContainer career={career}/>