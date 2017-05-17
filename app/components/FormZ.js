//SignInContainer.js
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { change, form } from 'redux-form'

// action 
import { 
  formZFetch,
  formZFieldChangeValue
  } from '../reducers/formZ'

const FormZ = ( props ) => {
  const { fetching, data, error, input } = props.formZ
  const onSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(input.email)
  }
  const fieldChange = (field) => (e) => {
    props.handleFieldChange(field, e.target.value)
  }
  return(
      <div className="col-xs-12 col-sm-12 col-md-12">
        <header>Form Z</header>
        <form onSubmit={onSubmit} className="form-horizontal">
         <div className="form-group">
            <label htmlFor="username" className="control-label">username</label>
            <div>
              <input type="email" value={input.email} onChange={fieldChange("email")} className="form-control" placeholder="you@somewhere.com" />
            </div>
          </div>
          { error && <div className="alert alert-danger" role="alert">{error}</div>}
          { data && <div className="alert alert-success" role="alert">{data}</div>}
          <button type="submit" className="pull-right btn btn-primary">{ fetching ? 'Fetching...' : 'Fetch' }</button>
        </form>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    formZ: state.formZ
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (input) => dispatch(formZFetch(input)),
    handleFieldChange: (field, value) => dispatch(formZFieldChangeValue(field, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormZ)


