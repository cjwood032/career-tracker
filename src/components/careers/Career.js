import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Career.css"

class Career extends Component {
  handleClick= event=> {
    event.preventDefault()
    this.props.deleteCareer(this.props.career.id)
  }
  
  render() {
    const { career } = this.props;
    return (
      <div className="career">
          {career.title}  <br/>{career.company}<br/><a href = {career.link}>link</a><br/>
          <div className="CareerName"><button className="btn-sm btn-link"><Link to={`/Careers/${career.id}`} >Show</Link></button> <button className="btn-sm btn-danger" onClick={this.handleClick}> Delete </button></div>
         
      </div>
    );
  }
};


export default (Career);
