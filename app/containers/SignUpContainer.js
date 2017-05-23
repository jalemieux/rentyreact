//SignUpContainer.js

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'



class SignUpContainer extends React.Component {
  constructor(props){
    super(props)
     this.onSubmit = this.onSubmit.bind(this)
     this.onFieldChange = this.onFieldChange.bind(this)
  }
  onSubmit(e){
    e.preventDefault()
    let { userid, password } = this.props.form.input
    try{
      this.props.handleSubmit(userid, password)
    }catch(e){
       this.props.handleError(e)
    }
  }

  onFieldChange(field){ 
    return (e) => this.props.handleFieldChange(field, e.target.value)
  }

  render(){
    console.log(this.props)
    let { fetching, data, error, input } = this.props.form
    return(
      <div>
        <div className="page-header">
          <h2>Sign Up</h2>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
           <form onSubmit={this.onSubmit} className="form-horizontal">
            <div className="form-group">
              <label></label>
              <div>
                <input type="email" value={input.userid} onChange={this.onFieldChange("userid")} className="form-control" placeholder="you@somewhere.com" />
              </div>
            </div>
            <div className="form-group">
              <label></label>
              <div>
                <input type="password" value={input.password} onChange={this.onFieldChange("password")} className="form-control" placeholder="P@ssW0rd!" />
              </div>
            </div>
            { error && <div className="alert alert-danger" role="alert">{error}</div>}
            { data && <div className="alert alert-success" role="alert">{data}</div>}
            <button type="submit" disabled={fetching} className="pull-right btn btn-primary">{ fetching ? 'Signing up...' : 'Sign Up' }</button>
          </form>
        </div>
      </div> 
      )
  }
}


import {
  signUpFetch,
  signUpFieldChangeValue,
  signUpFetchedErr
} from '../reducers/signUpReducer'


export default connect(
  // state
  (state) => {
    return {
      form: state.signUp, 
    }
  },
  // dispatches
  (dispatch) => {
    return {
      handleSubmit: (userid, password) => {
        dispatch(signUpFetch(userid, password))
      },
      handleFieldChange: (field, value) => {
        dispatch(signUpFieldChangeValue(field, value))
      },
      handleError: (e) => {
        dispatch(signUpFetchedErr(e))
      }
    }
  }
)(SignUpContainer)


