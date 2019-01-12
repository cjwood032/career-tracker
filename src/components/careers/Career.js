import React, { Component } from 'react';
//import DetailsContainer from '../../containers/DetailsContainer'

class Career extends Component {
  handleClick= event=> {
    event.preventDefault()
    this.props.deleteCareer(this.props.career.id)
  }

  render() {
    const { career } = this.props;

    return (
      <div>
        <li>
          Title:{career.title}  <a href = {career.link}>link</a>
          <button onClick={this.handleClick}> X </button>
          
        </li>
      </div>
    );
  }
};

export default Career;
// return to line 18<DetailsContainer career={career}/>