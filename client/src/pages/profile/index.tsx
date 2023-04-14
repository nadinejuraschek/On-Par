import { Button, Flag, LoadingSpinner, Text } from "components";
import { MouseEvent, useCallback, useContext, useMemo, useState } from "react";
import { mockHostChildren, mockHostParents } from "data";

import { PeopleList } from "components/List";
import { ProfileInput } from "components/Input";
import { UserContext } from "contexts";
import axios from "axios";
import blankPic from "images/blankProfile.svg";
import styles from "./profile.module.css";

export const Profile = (): JSX.Element => {
  /* @ts-ignore-next-line */
  const [user] = useContext( UserContext );
  // const daysNum = dayjs(new Date()).diff(user.startDate, 'days');

  if (!user) {
    return <LoadingSpinner />;
  }

  const [email, setEmail] = useState( user?.email );
  const [birthday, setBirthday] = useState( user?.birthday || "" );
  const [location, setLocation] = useState( user?.location || "" );
  const [phone, setPhone] = useState( user?.phone || "" );
  const [familyID, setFamilyID] = useState( user?.familyID );
  const [edit, setEdit] = useState( false );

  const toggleEdit = useCallback(() => edit ? setEdit( false ) : setEdit( true ), [edit]);

  const handleEdit = useCallback((event: MouseEvent) => {
    event.preventDefault();
    axios.put( "/api/user/" + user._id, {
      email: email,
      familyID: familyID,
      birthday: birthday,
      location: location,
      phone: phone,
    } ).then( updatedUser => {
      setEdit( false );
    } ).catch( err => {
      console.log( "Error: ", err );
      setEdit( false );
    } );
  }, []);

  const renderEditButton = useMemo(() => {
    return edit ? (
      <Button handleClick={ handleEdit } variant="primary">Update</Button>
    ) : (
      <Button handleClick={ toggleEdit } variant="primary">Edit</Button>
    );
  }, [edit, handleEdit, toggleEdit]);

  return (
    <main>
      <div className={ styles.grid }>
        <Text as="h2" size="xl" weight="bold">Your Profile</Text>
        <div className={ styles.imageContainer }>
          {/* @ts-ignore-next-line */}
          <img className={ styles.image } src={ blankPic } alt={ user.firstname } />
          { /* <Filer /> */ }
        </div>
        <div className={ styles.details }>
          <div className={ styles.name }>
            <Text as="h3" size="lg" weight="bold">{ user.firstname } { user.lastname }</Text>
            <Flag country={ user.country } />
          </div>
          <div className={ styles.buttons }>
            { renderEditButton }
            <Button className={ styles.passwordBtn }>Change Password</Button>
          </div>
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
