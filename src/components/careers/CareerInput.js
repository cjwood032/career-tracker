import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createCareer} from '../../actions/careerActions'
import {updateFormData} from '../../actions/formActions'
import "./CareerInput.css"
class CareerInput extends Component {


  handleChange = event => {
    const currentFormData = Object.assign({}, this.props.formData, {[event.target.name]: event.target.value})
      this.props.updateFormData(currentFormData)
    }
  

  handleSubmit = event => {
    event.preventDefault()
    this.props.createCareer(this.props.formData)
  }
  render() {
    const {title, company, link, location, description} = this.props.formData
    return (
      <div>
        <center><h2>Add an Opening:</h2>
        <form className="CareerForm" onSubmit={this.handleSubmit}>
          Title<input type="text" name="title" value={title} onChange={this.handleChange}/>
          Company<input type="text" name="company" value={company} onChange={this.handleChange}/>
          URL<input type="url" name="link" value={link} onChange={this.handleChange}/>
          Location<input type="text" name="location" value={location} onChange={this.handleChange}/><br/>
          Description<textarea name="description" value={description} onChange={this.handleChange} />
          
          <input type="submit" />
        </form></center>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return ({
    formData: state.formData
  })
}

export default connect(mapStateToProps, {createCareer, updateFormData})(CareerInput);
