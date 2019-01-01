import React, { Component } from 'react';
import DetailsContainer from '../../containers/DetailsContainer'

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
          {career.title}
          <button onClick={this.handleClick}> X </button>
          <DetailsContainer career={career}/>
        </li>
      </div>
    );
  }
};

export default Career;
