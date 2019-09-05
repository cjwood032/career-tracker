import React, { Component } from 'react';
import Interview from './Interview'
import "./Interview.css"

class Interviews extends Component {
 
  render() {
    if (this.state !== null) {
      const { deleteInterview, showInterview} = this.props;
      var interviewList = this.state.interviewList.map(interview => {
        return (
          <div className="col-sm-3" key={interview.id}><center>
          <Interview
              key={interview.id}
              interview={interview}
              deleteInterview={deleteInterview}
              showInterview={showInterview}
          /></center>
          </div>
        )
      });
    }
    else {
    const { interviews, deleteInterview, showInterview} = this.props;
    var interviewList = interviews.map(interview => {
      return (
        <div className="col-sm-3" key={interview.id}><center>
        <Interview
            key={interview.id}
            interview={interview}
            title={interview.title}
            deleteInterview={deleteInterview}
            showInterview={showInterview}
        /></center>
        </div>
      )
    });
  }
    return(
    <div>
      <div className="row">
          {interviewList}
      </div>
    </div>
    );
  }
};

export default Interviews;
