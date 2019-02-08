import React, { Component } from 'react';
import './Detail.css'
import {connect} from 'react-redux';
import {createDetail} from '../../actions/detailActions'
import {updateDetailFormData} from '../../actions/formActions'

class DetailInput extends Component {
  handleChange = event => {
    const currentFormData = Object.assign({}, this.props.detailFormData, {[event.target.name]: event.target.value})
      this.props.updateDetailFormData(currentFormData)
    }

    handleSubmit = event => {
      event.preventDefault()
      this.props.createDetail(this.props.detailFormData)
    }
  render() {
    const {company, updated, contacted, email, name, role} = this.props.detailFormData
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          Company:<input type="text" name="company" value={company} onChange={this.handleChange}/>
          Date of last update:<input type="date" name="updated" value={updated} onChange={this.handleChange}/>
          Date of last contact:<input type="date" name="contacted" value={contacted} onChange={this.handleChange}/>
          <br/>Contact Email:<input type="text" name="email" value={email} onChange={this.handleChange}/>
          Contact Name:<input type="text" name="name" value={name} onChange={this.handleChange}/>
          Contact Title:<input type="text" name="role" value={role} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return ({
    detailFormData: state.detailFormData
  })
}
export default connect(mapStateToProps, {createDetail, updateDetailFormData})(DetailInput);
