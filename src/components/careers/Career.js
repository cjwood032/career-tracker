import React, { Component } from 'react';
import DetailsContainer from '../../containers/DetailsContainer'
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
          <button onClick={this.handleCareer}> Show </button>
          <DetailsContainer career={career}/>
        </li>
      </div>
    );
  }
};

export default Career;
// return to line 18<DetailsContainer career={career}/>