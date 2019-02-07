import React, { Component } from 'react';
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
    const {company, updateDate, lastContact, contactEmail, contactName, contactTitle} = this.props.detailFormData
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Company:<input type="text" name="company" value={company} onChange={this.handleChange}/>
          Date of last update:<input type="date" name="updateDate" value={updateDate} onChange={this.handleChange}/>
          Date of last contact:<input type="date" name="lastContact" value={lastContact} onChange={this.handleChange}/>
          <br/>Contact Email:<input type="text" name="contactEmail" value={contactEmail} onChange={this.handleChange}/>
          Contact Name:<input type="text" name="contactName" value={contactName} onChange={this.handleChange}/>
          Contact Title:<input type="text" name="contactTitle" value={contactTitle} onChange={this.handleChange}/>
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
