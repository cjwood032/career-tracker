import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import DetailsContainer from '../../containers/DetailsContainer'
class Career extends Component {
  handleClick= event=> {
    event.preventDefault()
    this.props.deleteCareer(this.props.career.id)
  }
  handleCareer= event=> {
    event.preventDefault()
    this.props.showCareer(this.props.career.id)
  }
  render() {
    const { career } = this.props;

    return (
      <div>
        <li>
          Title:{career.title}  <a href = {career.link}>link</a>
          <button onClick={this.handleClick}> Delete </button>
          <div classname="CareerName"><button><NavLink to={`/Careers/${career.id}`} style={{textDecoration: 'none'}}>Show</NavLink></button></div>
          
        </li>
      </div>
    );
  }
};

export default Career;
// return to line 21 <DetailsContainer career={career}/>