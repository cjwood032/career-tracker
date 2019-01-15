import React, { Component } from 'react'
import {connect} from 'react-redux'
import DocumentInput from '../components/documents/DocumentInput'
import Documents from '../components/documents/Documents'
class DocumentsContainer extends Component {

  render() {
    return (
      <div>
        <h3>Documents </h3>
        <DocumentInput uploadDocument={this.props.uploadDocument}/>
        <Documents documents={this.props.documents}  deleteDocument={this.props.deleteDocument}/>
      </div>
    )
  }
}

const mapStateToProps = ({documents}) => {
  return {documents}
}

const mapDispatchToProps = dispatch => ({
   uploadDocument: (resume, coverLetter) => dispatch({type: 'UPLOAD_DOCUMENT', resume, coverLetter }),
   deleteDocument: id => dispatch({type: 'DELETE_DOCUMENT', id })
})


export default connect(mapStateToProps, mapDispatchToProps)(DocumentsContainer)
// return to line 12 