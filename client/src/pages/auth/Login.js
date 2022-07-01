// REACT
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// NPM PACKAGES
import axios from 'axios';

// STYLES
import styles from './auth.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    axios({
      url: '/api/user/login',
      method: 'POST',
      data: { email: email, password: password },
    })
      .then(response => {
        navigate('/home');
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  const handleGuest = event => {
    event.preventDefault();
    axios({
      url: '/api/user/login',
      method: 'POST',
      data: { email: "tester@mail.com", password: "testing123" },
    })
      .then(response => {
        navigate('/home');
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  return (
    <main>
      <h2>Log In</h2>

        <form className={`ui form ${styles.form}`} onSubmit={handleSubmit}>
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

          <div className='ui message'>
            <div className={styles.messageItem}>
              <p>Don't have an account, yet?</p>
              <a href='/register' className='ui button'>
                Register
              </a>
            </div>
            <div className={styles.messageItem}>
              <p>Testing?</p>
              <button className='ui button' onClick={handleGuest}>
                Use Guest Account
              </button>
            </div>
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
    </main>
  );
};
