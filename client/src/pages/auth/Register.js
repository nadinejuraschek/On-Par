// REACT
import { useState } from 'react';
import { withRouter } from 'react-router';

// NPM PACKAGES
import axios from 'axios';
import moment from 'moment';

// COMPONENTS
import DatePicker from 'components/DatePicker';

// STYLES
import styles from './auth.module.css';

const Register = ({ history }) => {
  // const [role, setRole] = useState('');
  // const [familyID, setFamilyID] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [openDatePicker, setOpenDatePicker] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      role: "Au Pair",
      familyID: "00000",
      firstname: firstname,
      lastname: lastname,
      country: country,
      startDate: startDate,
      email: email,
      password: password,
    };

    axios({
      url: '/api/user/register',
      method: 'POST',
      data: newUser,
    })
      .then(response => {
        console.log('Data: ' + response.data);
        history.push('/home');
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
        console.log('Data: ' + response.data);
        history.push('/home');
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  const handleDateChange = startDate => {
    setStartDate({ startDate });
  };

  const toggleDatePicker = event => {
    event.preventDefault();
    openDatePicker ? setOpenDatePicker(false) : setOpenDatePicker(true);
  };

  return (
    <main>
      <h2>Register</h2>

      <form className={`ui form ${styles.form}`} onSubmit={handleSubmit}>
        {/* <div className='field'>
          <label>I am a</label>
          <select
            name='role'
            onChange={event => setRole(event.target.value)}
            className='ui fluid dropdown'
          >
            <option className='default text' value=''>
              Choose One
            </option>
            <option value='Au Pair'>Au Pair</option>
            <option value='Host Family'>Host Family Member</option>
            <option value='Community Counselor'>Community Counselor</option>
          </select>
        </div> */}

        {/* <div className='field'>
          <div className='two fields'> */}
            {/* <div className='field'>
              <label>Your Host Family's ID</label>
              <div className='ui left icon input'>
                <i className='users icon'></i>
                <input
                  type='text'
                  name='familyID'
                  placeholder='Host Family ID'
                  onChange={event => setFamilyID(event.target.value)}
                />
              </div>
            </div> */}
            <div className='field'>
              <label>Arrival Date</label>
              <div className='ui left icon input' onClick={toggleDatePicker}>
                <i className='calendar alternate outline icon'></i>
                <input
                  type='text'
                  name='startDate'
                  placeholder={moment().format('DD/MM/YYYYY')}
                  onChange={handleDateChange}
                  value={moment(startDate).format('DD/MM/YYYY')}
                />
              </div>
              {openDatePicker ? (
                <DatePicker startDate={startDate} setStartDate={setStartDate} />
              ) : null}
            </div>
          {/* </div>
        </div> */}

        <div className='field'>
          <label>Your Name</label>
          <div className='two fields'>
            <div className='field'>
              <div className='ui left icon input'>
                <i className='user icon'></i>
                <input
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  onChange={event => setFirstname(event.target.value)}
                />
              </div>
            </div>
            <div className='field'>
              <div className='ui left icon input'>
                <i className='user icon'></i>
                <input
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  onChange={event => setLastname(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='field'>
          <label>Home Country</label>
          <select
            name='country'
            onChange={event => setCountry(event.target.value)}
            className='ui fluid dropdown'
          >
            <option className='default text'>Select Country</option>
            <option className='item' value='ar'>
              Argentina
            </option>
            <option className='item' value='au'>
              Australia
            </option>
            <option className='item' value='at'>
              Austria
            </option>
            <option className='item' value='bo'>
              Bolivia
            </option>
            <option className='item' value='ba'>
              Bosnia
            </option>
            <option className='item' value='br'>
              Brazil
            </option>
            <option className='item' value='ca'>
              Canada
            </option>
            <option className='item' value='cl'>
              Chile
            </option>
            <option className='item' value='cn'>
              China
            </option>
            <option className='item' value='co'>
              Colombia
            </option>
            <option className='item' value='cr'>
              Costa Rica
            </option>
            <option className='item' value='hr'>
              Croatia
            </option>
            <option className='item' value='cz'>
              Czech Republic
            </option>
            <option className='item' value='dk'>
              Denmark
            </option>
            <option className='item' value='ec'>
              Ecuador
            </option>
            <option className='item' value='sv'>
              El Salvador
            </option>
            <option className='item' value='ee'>
              Estonia
            </option>
            <option className='item' value='fi'>
              Finland
            </option>
            <option className='item' value='fr'>
              France
            </option>
            <option className='item' value='de'>
              Germany
            </option>
            <option className='item' value='gt'>
              Guatemala
            </option>
            <option className='item' value='hu'>
              Hungary
            </option>
            <option className='item' value='ie'>
              Ireland
            </option>
            <option className='item' value='il'>
              Israel
            </option>
            <option className='item' value='it'>
              Italy
            </option>
            <option className='item' value='lv'>
              Latvia
            </option>
            <option className='item' value='mx'>
              Mexico
            </option>
            <option className='item' value='nl'>
              Netherlands
            </option>
            <option className='item' value='nz'>
              New Zealand
            </option>
            <option className='item' value='pa'>
              Panama
            </option>
            <option className='item' value='pe'>
              Peru
            </option>
            <option className='item' value='pl'>
              Poland
            </option>
            <option className='item' value='pt'>
              Portugal
            </option>
            <option className='item' value='ru'>
              Russia
            </option>
            <option className='item' value='cs'>
              Serbia
            </option>
            <option className='item' value='rs'>
              Serbia
            </option>
            <option className='item' value='sk'>
              Slovakia
            </option>
            <option className='item' value='za'>
              South Africa
            </option>
            <option className='item' value='kr'>
              South Korea
            </option>
            <option className='item' value='es'>
              Spain
            </option>
            <option className='item' value='se'>
              Sweden
            </option>
            <option className='item' value='ch'>
              Switzerland
            </option>
            <option className='item' value='th'>
              Thailand
            </option>
            <option className='item' value='tr'>
              Turkey
            </option>
            <option className='item' value='ua'>
              Ukraine
            </option>
            <option className='item' value='gb'>
              United Kingdom
            </option>
          </select>
        </div>

        <div className='field'>
          <label>E-Mail</label>
          <div className='ui left icon input'>
            <i className='envelope icon'></i>
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
            Register
          </button>
        </div>

        <div className='ui message'>
          <div className={styles.messageItem}>
            <p>Already have an account?</p>
            <a href='/login' className='ui button'>
              Log In
            </a>
          </div>
          <div className={styles.messageItem}>
            <p>Testing?</p>
            <button className='ui button' onClick={handleGuest}>
              Use Guest Account
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default withRouter(Register);
