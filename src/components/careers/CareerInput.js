import React, { Component } from 'react';

class CareerInput extends Component {
  constructor(props){
    super(props)

    this.state={
      title: '',
      link: ''
    }
    this.handleChange = this.handleChange.bind(this);
}

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addCareer(this.state.title, this.state.link)
    this.setState({
      title: '',
      link: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title<input type="text" name="title" onChange={this.handleChange}/>
          URL<input type="url" name="link" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default CareerInput;
