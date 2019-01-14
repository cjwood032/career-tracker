import React, { Component } from 'react'
import {connect} from 'react-redux'
class DocumentsContainer extends Component {

  render() {
    return (
      <div>
        Documents Go Here
      </div>
    )
  }
}

const mapStateToProps = ({documents}) => {
  return {documents}
}

const mapDispatchToProps = dispatch => ({
   uploadDocument: detail => dispatch({type: 'UPLOAD_DOCUMENT', detail }),
   deleteDocument: id => dispatch({type: 'DELETE_DOCUMENT', id })
})


export default connect(mapStateToProps, mapDispatchToProps)(DocumentsContainer)
// return to line 11 