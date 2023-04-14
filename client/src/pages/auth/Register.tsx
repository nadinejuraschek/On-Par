import * as dayjs from "dayjs";

import { Button, DatePicker, Text } from "components";
import { FormEvent, useState } from "react";

import axios from "axios";
import styles from "./auth.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = (): JSX.Element => {
  // const [role, setRole] = useState('');
  // const [familyID, setFamilyID] = useState('');
  const [firstname, setFirstname] = useState( "" );
  const [lastname, setLastname] = useState( "" );
  const [country, setCountry] = useState( "" );
  const [startDate, setStartDate] = useState( new Date() );
  const [email, setEmail] = useState( "" );
  const [password, setPassword] = useState( "" );

  const [openDatePicker, setOpenDatePicker] = useState( false );

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent): void => {
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

    axios( {
      url: "/api/user/register",
      method: "POST",
      data: newUser,
    } )
      .then( () => {
        navigate( "/home" );
      } )
      .catch( () => {
        toast.error("Could not register user. Please try again later!");
        // console.debug( "Error when registering user: " + error.response );
      } );
  };

  const handleGuest = event => {
    event.preventDefault();
    axios( {
      url: "/api/user/login",
      method: "POST",
      data: { email: "tester@mail.com", password: "testing123" },
    } )
      .then( () => {
        navigate( "/home" );
      } )
      .catch( () => {
        toast.error("Could not log in test user. Please try again later!");
        // console.debug( "Error: " + error.response );
      } );
  };

  const handleDateChange = startDate => {
    setStartDate( startDate );
  };

  const toggleDatePicker = event => {
    event.preventDefault();
    openDatePicker ? setOpenDatePicker( false ) : setOpenDatePicker( true );
  };

  return (
    <main>
      <Text as="h2" size="xl" weight="bold">Register</Text>

      <form className={ `ui form ${ styles.form }` } onSubmit={ handleSubmit }>
        { /* <div className='field'>
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
        </div> */ }

        { /* <div className='field'>
          <div className='two fields'> */ }
        { /* <div className='field'>
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
            </div> */ }
        <div className="field">
          <label htmlFor="startDate">Arrival Date</label>
          <div className="ui left icon input" onClick={ toggleDatePicker } role="presentation">
            <i className="calendar alternate outline icon"></i>
            <input
              type="text"
              name="startDate"
              placeholder={ dayjs().format( "DD/MM/YYYYY" ) }
              onChange={ handleDateChange }
              value={ dayjs( startDate ).format( "DD/MM/YYYY" ) }
            />
          </div>
          { openDatePicker ? (
            <DatePicker startDate={ startDate } setStartDate={ setStartDate } />
          ) : null }
        </div>
        { /* </div>
        </div> */ }

        <div className="field">
          <label htmlFor="firstname">Your Name</label>
          <div className="two fields">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={ event => setFirstname( event.target.value ) }
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={ event => setLastname( event.target.value ) }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label htmlFor="country">Home Country</label>
          <select
            name="country"
            onChange={ event => setCountry( event.target.value ) }
            className="ui fluid dropdown"
          >
            <option className="default text">Select Country</option>
            <option className="item" value="ar">
              Argentina
            </option>
            <option className="item" value="au">
              Australia
            </option>
            <option className="item" value="at">
              Austria
            </option>
            <option className="item" value="bo">
              Bolivia
            </option>
            <option className="item" value="ba">
              Bosnia
            </option>
            <option className="item" value="br">
              Brazil
            </option>
            <option className="item" value="ca">
              Canada
            </option>
            <option className="item" value="cl">
              Chile
            </option>
            <option className="item" value="cn">
              China
            </option>
            <option className="item" value="co">
              Colombia
            </option>
            <option className="item" value="cr">
              Costa Rica
            </option>
            <option className="item" value="hr">
              Croatia
            </option>
            <option className="item" value="cz">
              Czech Republic
            </option>
            <option className="item" value="dk">
              Denmark
            </option>
            <option className="item" value="ec">
              Ecuador
            </option>
            <option className="item" value="sv">
              El Salvador
            </option>
            <option className="item" value="ee">
              Estonia
            </option>
            <option className="item" value="fi">
              Finland
            </option>
            <option className="item" value="fr">
              France
            </option>
            <option className="item" value="de">
              Germany
            </option>
            <option className="item" value="gt">
              Guatemala
            </option>
            <option className="item" value="hu">
              Hungary
            </option>
            <option className="item" value="ie">
              Ireland
            </option>
            <option className="item" value="il">
              Israel
            </option>
            <option className="item" value="it">
              Italy
            </option>
            <option className="item" value="lv">
              Latvia
            </option>
            <option className="item" value="mx">
              Mexico
            </option>
            <option className="item" value="nl">
              Netherlands
            </option>
            <option className="item" value="nz">
              New Zealand
            </option>
            <option className="item" value="pa">
              Panama
            </option>
            <option className="item" value="pe">
              Peru
            </option>
            <option className="item" value="pl">
              Poland
            </option>
            <option className="item" value="pt">
              Portugal
            </option>
            <option className="item" value="ru">
              Russia
            </option>
            <option className="item" value="cs">
              Serbia
            </option>
            <option className="item" value="rs">
              Serbia
            </option>
            <option className="item" value="sk">
              Slovakia
            </option>
            <option className="item" value="za">
              South Africa
            </option>
            <option className="item" value="kr">
              South Korea
            </option>
            <option className="item" value="es">
              Spain
            </option>
            <option className="item" value="se">
              Sweden
            </option>
            <option className="item" value="ch">
              Switzerland
            </option>
            <option className="item" value="th">
              Thailand
            </option>
            <option className="item" value="tr">
              Turkey
            </option>
            <option className="item" value="ua">
              Ukraine
            </option>
            <option className="item" value="gb">
              United Kingdom
            </option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="email">E-Mail</label>
          <div className="ui left icon input">
            <i className="envelope icon"></i>
            <input
              type="text"
              name="email"
              placeholder="E-Mail"
              onChange={ event => setEmail( event.target.value ) }
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={ event => setPassword( event.target.value ) }
            />
          </div>
        </div>

        <div className={ styles.centeredBtn }>
          <Button autoFocus type="submit" variant="primary">
            Register
          </Button>
        </div>

        <div className={ styles.optionsContainer }>
          <div className={ styles.optionsItem }>
            <Text as="p" size="sm">Already have an account?</Text>
            <Button link="/login" variant="tertiary">
              Log In
            </Button>
          </div>
          <div className={ styles.optionsItem }>
            <Text as="p" size="sm">Testing?</Text>
            <Button handleClick={ handleGuest } variant="tertiary">
              Use Guest Account
            </Button>
          </div>
        </div>

      </form>
    </main>
  );
};
