
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import {Link} from 'react-router-dom';


export class SignupForm extends Component {
    state = {
        username: '',
        email:'',
        password1:'',
        password2:''
      };
    
 
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  onSubmit = (e) => {
    e.preventDefault();
    const {username,email,password1,password2} = this.state;
    this.props.onAuth(username,email,password1,password2)
    console.log('Received Values from Form:',username,email,password1,password2);
    this.props.history.push('/login');   
  };

  


  render() {

    let errorMessage = null;
    if(this.props.error)
{
    errorMessage = (
        <p>{this.props.error.message}</p>
    )
}   
    return (
    <div> {errorMessage}
      <div className="card card-body mt-4 mb-4">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>UserName</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={this.onChange}
              value={this.state.username}
            />
            
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="mail"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
            
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password1"
              onChange={this.onChange}
              value={this.state.password1}
            />
            </div>

            <div className="form-group">
            <label>Confirm Password</label>
            <input
              className="form-control"
              type="password"
              name="password2"
              onChange={this.onChange}
              value={this.state.password2}
            />
            </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              SignUp   
            </button>
               Already Registered? Then...  
            <Link style = {{color:'blue',textDecorationStyle:'double'}} to = '/login/'>  Login</Link>
        

          </div>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        error:state.error
    }
}

const mapDispatchToProps = dispatch => {

    return{
        onAuth:(username,email,password1,password2) => dispatch(actions.authSignup(username,email,password1,password2))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupForm);
