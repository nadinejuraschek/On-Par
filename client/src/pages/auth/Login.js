// REACT
import React, { useState } from 'react';
import { withRouter } from 'react-router';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Header from '../../components/Header';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios({
      url: '/api/user/login',
      method: 'POST',
      data: { email: email, password: password },
    })
      .then(response => {
        console.log('Data: ' + response.data);
        history.push('/home');
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  return (
    <section className='wrapper'>
      <div className='block'>
        <Header header='Login' />

        <div className='custom-container auth-container'>
          <form className='ui form' onSubmit={handleSubmit}>
            <div className='field'>
              <label>E-Mail</label>
              <div className='ui left icon input'>
                <i className='mail icon'></i>
                <input
                  type='text'
                  name='email'
                  placeholder='E-Mail'
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div className='field'>
              <label>Password</label>
              <div className='ui left icon input'>
                <i className='lock icon'></i>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={event => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className='centered'>
              <button className='ui button' type='submit'>
                Log In
              </button>
            </div>

            <div className='ui message centered'>
              <p>Don't have an account, yet?</p>
              <a href='/register' className='ui button'>
                Register
              </a>
              {/* <p>Or Log In with</p>
                                <div className="ui small buttons">
                                    <button className="ui facebook button">
                                        <i className="facebook icon"></i>
                                        Facebook
                                    </button>
                                    <div className="or"></div>
                                    <button className="ui google plus button">
                                        <i className="google icon"></i>
                                        Google
                                    </button>
                                </div> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Login);