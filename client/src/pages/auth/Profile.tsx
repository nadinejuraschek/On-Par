import { Button, Flag } from "components";
import { MouseEvent, useContext, useState } from "react";
import { mockHostChildren, mockHostParents } from "data";

import { PeopleList } from "components/List";
import { ProfileInput } from "components/Input";
import { UserContext } from "contexts";
import axios from "axios";
import blankPic from "images/blankProfile.svg";
import styles from "./auth.module.css";

export const Profile = (): JSX.Element => {
  /* @ts-ignore */
  const [user] = useContext( UserContext );
  // const daysNum = dayjs(new Date()).diff(user.startDate, 'days');

  const [email, setEmail] = useState( user.email );
  const [birthday, setBirthday] = useState( user.birthday || "" );
  const [location, setLocation] = useState( user.location || "" );
  const [phone, setPhone] = useState( user.phone || "" );
  const [facebook, setFacebook] = useState( user.facebook || "" );
  const [instagram, setInstagram] = useState( user.instagram || "" );
  const [twitter, setTwitter] = useState( user.twitter || "" );
  const [snapchat, setSnapchat] = useState( user.snapchat || "" );
  const [familyID, setFamilyID] = useState( user.familyID );
  const [edit, setEdit] = useState( false );

  const toggleEdit = (): void => {
    edit ? setEdit( false ) : setEdit( true );
  };

  const handleEdit = (event: MouseEvent): void => {
    event.preventDefault();
    axios.put( "/api/user/" + user._id, {
      email: email,
      familyID: familyID,
      birthday: birthday,
      location: location,
      phone: phone,
      contact: {
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        snapchat: snapchat
      }
    } ).then( updatedUser => {
      setEdit( false );
    } ).catch( err => {
      console.log( "Error: ", err );
      setEdit( false );
    } );
  };

  const editButton = edit ? (
    <Button label="Update" handleClick={ handleEdit } variant="primary">Update</Button>)
    :
    (<Button label="Edit" handleClick={ toggleEdit } variant="primary">Edit</Button>);

  return (
    <main>
      <div className={ styles.grid }>
        <h2 className={ styles.header }>Your Profile</h2>
        <div className={ styles.imageContainer }>
          {/* @ts-ignore */}
          <img className={ styles.image } src={ blankPic } alt={ user.firstname } />
          { /* <Filer /> */ }
        </div>
        <div className={ styles.details }>
          <div className={ styles.name }>
            <h2>
              { user.firstname } { user.lastname }
            </h2>
            <Flag country={ user.country } />
          </div>
          <div className={ styles.buttons }>
            { editButton }
            <button className="ui disabled button" id={ styles.passwordBtn }>Change Password</button>
          </div>
          <h4 className={ `ui dividing header ${ styles.personalHeader }` }>Personal Info</h4>
          <div className={ styles.info }>
            <ProfileInput
              edit={ edit }
              handleChange={ setEmail }
              icon="envelope outline"
              label="E-Mail"
              name="email"
              value={ email }
            />
            <ProfileInput
              edit={ edit }
              handleChange={ setBirthday }
              icon="birthday cake"
              label="Birthday"
              name="birthday"
              value={ birthday }
            />
            <ProfileInput
              edit={ edit }
              handleChange={ setLocation }
              icon="map marker alternate"
              label="Location"
              name="location"
              value={ location }
            />
            <ProfileInput
              edit={ edit }
              handleChange={ setPhone }
              icon="phone alternate"
              label="Phone"
              name="phone"
              value={ phone }
            />
          </div>
          <div className={ styles.connect }>
            <ProfileInput
              edit={ edit }
              handleChange={ setFacebook }
              icon="facebook alternate"
              label="Facebook"
              name="facebook"
              value={ facebook }
            />
            <ProfileInput
              edit={ edit }
              handleChange={ setInstagram }
              icon="instagram alternate"
              label="Instagram"
              name="instagram"
              value={ instagram }
            />
            <ProfileInput
              edit={ edit }
              handleChange={ setTwitter }
              icon="twitter alternate"
              label="Twitter"
              name="twitter"
              value={ twitter }
            />
            <ProfileInput
              edit={ edit }
              handleChange={ setSnapchat }
              icon="snapchat square alternate"
              label="Snapchat"
              name="snapchat"
              value={ snapchat }
            />
          </div>
        </div>

        <div className={ styles.hostfamily }>
          <h4 className="ui dividing header">Host Family Info</h4>
          <div className={ styles.familyInfo }>
            <div>
              <ProfileInput
                edit={ edit }
                handleChange={ setFamilyID }
                icon="id card outline"
                label="Host Family ID"
                name="familyID"
                value={ familyID }
              />
              <PeopleList data={ mockHostParents } label="Host Parents" />
            </div>
            <PeopleList data={ mockHostChildren } label="Host Children" />
          </div>
        </div>
      </div>
    </main>
  );
};
