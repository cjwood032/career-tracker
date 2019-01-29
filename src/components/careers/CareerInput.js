import React, { Component } from 'react';

class CareerInput extends Component {
  constructor(props){
    super(props)

    this.state={
      title: '',
      company: '',
      location: '',
      link: '',
      description: ''
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
    this.props.addCareer(this.state.title, this.state.link, this.state.company, this.state.location, this.state.description)
    this.setState({
      title: '',
      company: '',
      location: '',
      link: '',
      description: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title<input type="text" name="title" onChange={this.handleChange}/>
          Company<input type="text" name="company" onChange={this.handleChange}/><br></br>
          URL<input type="url" name="link" onChange={this.handleChange}/>
          Location<input type="text" name="location" onChange={this.handleChange}/><br/>
          Description<textarea name="description" value={this.state.value} onChange={this.handleChange} />
          
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default CareerInput;
