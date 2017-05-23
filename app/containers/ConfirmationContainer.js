//ConfirmationContainer.js
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'



class ConfirmationContainer extends React.Component {
  constructor(props){
    super(props)
     this.onSubmit = this.onSubmit.bind(this)
     this.onFieldChange = this.onFieldChange.bind(this)
  }
  onSubmit(e){
    e.preventDefault()
    let { form, user } = this.props
    try{
      this.props.handleSubmit(user.userid, form.input.code)
    }catch(e){
       this.props.handleError(e)
    }
  }

  onFieldChange(field){ 
    return (e) => this.props.handleFieldChange(field, e.target.value)
  }

  render(){
    let { fetching, data, error, input } = this.props.form
    return(
      <div>
        <div className="page-header">
          <h2>Enter your code</h2>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
           <form onSubmit={this.onSubmit} className="form-horizontal">
            <div className="form-group">
            <label></label>
              <div>
                <input type="text" value={input.code} onChange={this.onFieldChange("code")} className="form-control" placeholder="code" />
              </div>
            </div>
            { error && <div className="alert alert-danger" role="alert">{error}</div>}
            { data && <div className="alert alert-success" role="alert">{data}</div>}
            <button type="submit" disabled={fetching} className="pull-right btn btn-primary">{ fetching ? 'Confirming...' : 'Confirm' }</button>
          </form>
        </div>
      </div> 
      )
  }
}


import {
  confirmationFetch,
  confirmationFieldChangeValue,
  confirmationFetchedErr
} from '../reducers/confirmationReducer'


export default connect(
  // state
  (state) => {
    return {
      form: state.confirmation, 
      user: state.user
    }
  },
  // dispatches
  (dispatch) => {
    return {
      handleSubmit: (userid, code) => {
        dispatch(confirmationFetch(userid, code))
      },
      handleFieldChange: (field, value) => {
        dispatch(confirmationFieldChangeValue(field, value))
      },
      handleError: (e) => {
        dispatch(confirmationFetchedErr(e))
      }
    }
  }
)(ConfirmationContainer)


