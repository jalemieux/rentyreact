//SignInContainer.js
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  signInFetch,
  signInFieldChangeValue,
  signInFetchedErr
} from '../reducers/signinReducer'

import {

} from '../api/aws'


class SignInContainer extends React.Component {
  constructor(props){
    super(props)
     this.onSubmit = this.onSubmit.bind(this)
     this.onFieldChange = this.onFieldChange.bind(this)
  }
  componentWillMount(){
    if(this.props.user.authenticated == true){
      this.props.handleReroute('/')
    }
  }
  onSubmit(e){
    e.preventDefault()
    try{
      this.props.handleSubmit(this.props.form.input)
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
          <h2>Sign In!</h2>
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
              <div>
                <input type="password" value={input.password} onChange={this.onFieldChange("password")} className="form-control" placeholder="MyP@ssw0rd" />
              </div>
            </div>
            { error && <div className="alert alert-danger" role="alert">{error}</div>}
            { data && <div className="alert alert-success" role="alert">{data}</div>}
            <button type="submit" disabled={fetching} className="pull-right btn btn-primary">{ fetching ? 'Signing In...' : 'Sign In' }</button>
          </form>
        </div>
      </div> 
      )
  }
}
// const SignInContainer = (props) => {
//   const { fetching, data, error, input } = props.form
//   console.log(props)
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     try{
//       props.handleSubmit(input)
//     }catch(e){
//       props.handleError(e)
//     }
//   }

//   const fieldChange = (field) => { 
//     return (e) => props.handleFieldChange(field, e.target.value)
//   }

//   return (
//   <div>
//     <div className="page-header">
//       <h2>Sign In!</h2>
//     </div>
//     <div className="col-xs-12 col-sm-12 col-md-12">
//        <form onSubmit={handleSubmit} className="form-horizontal">
//         <div className="form-group">
//         <label></label>
//           <div>
//             <input type="email" value={input.userid} onChange={fieldChange("userid")} className="form-control" placeholder="you@somewhere.com" />
//           </div>
//         </div>
//         <div className="form-group">
//           <div>
//             <input type="password" value={input.password} onChange={fieldChange("password")} className="form-control" placeholder="MyP@ssw0rd" />
//           </div>
//         </div>
//         { error && <div className="alert alert-danger" role="alert">{error}</div>}
//         { data && <div className="alert alert-success" role="alert">{data}</div>}
//         <button type="submit" disabled={fetching} className="pull-right btn btn-primary">{ fetching ? 'Signing In...' : 'Sign In' }</button>
//       </form>
//     </div>
//   </div> 
// )
// }




export default connect(
  // state
  (state) => {
    return {
      form: state.signIn, 
      user: state.user
    }
  },
  // dispatches
  (dispatch) => {
    return {
      handleSubmit: (input) => {
        dispatch(signInFetch(input))
      },
      handleFieldChange: (field, value) => {
        dispatch(signInFieldChangeValue(field, value))
      },
      handleError: (e) => {
        dispatch(signInFetchedErr(e))
      }
    }
  }
)(SignInContainer)


