//ExampleContainer.js
import React from 'react'
import { connect } from 'react-redux'

const ExampleContainer = ( props ) => {
  return (
    <div>
      <h1>ExampleContainer <small> w/ token { props.user.token}</small></h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  null, null
)(ExampleContainer)
