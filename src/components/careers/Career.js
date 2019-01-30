import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Career extends Component {
  handleClick= event=> {
    event.preventDefault()
    this.props.deleteCareer(this.props.career.id)
  }
  
  render() {
    const { career } = this.props;
    return (
      <div>
          Title: {career.title}  <br/><a href = {career.link}>link</a><br/>
          <div className="CareerName"><button ><Link to={`/Careers/${career.id}`} style={{textDecoration: 'none'}}>Show</Link></button></div>
          <button className="btn-sm btn-danger" onClick={this.handleClick}> Delete </button>
      </div>
    );
  }
};


export default (Career);
// return to line 21 <DetailsContainer career={career}/>