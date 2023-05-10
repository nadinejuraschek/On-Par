import { Button, Checkbox, DatePicker, Input, Modal, Text } from 'components';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import blankPic from "images/blankProfile.svg";
import styles from './userInfo.module.css';

export const UserInfo = ({ user }: { user: any }): JSX.Element => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    birthday: user.birthday || undefined,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname || undefined,
    location: user.location || undefined,
    phone: user.phone || undefined,
    privateBirthday: user.birthday || undefined,
    privateLastName: user.privateLastName || false,
    privateEmail: user.privateEmail || false,
    privatePhone: user.privatePhone || false,
  });
  /* const [email, setEmail] = useState( user?.email );
  const [birthday, setBirthday] = useState( user?.birthday || "" );
  const [location, setLocation] = useState( user?.location || "" );
  const [phone, setPhone] = useState( user?.phone || "" );

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
  }, [birthday, email, familyID, location, phone, user]); */

  const handleInputChange = useCallback((e: ChangeEvent, field: string) => {
    const value = (e.target as HTMLInputElement).value;
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  }, []);

  const renderEditModal = useMemo(() => {
    if (!openEditModal) return null;

    return (
      <Modal handleClose={() => setOpenEditModal(false)} title="Edit Personal Details">
        <div>CONTENT</div>
      </Modal>
    );
  }, [openEditModal]);

  return (
    <>
      <div className={ styles.userInfoTab }>
        <div className={ styles.avatar }>
          <div className={ styles.imageContainer }>
            {/* @ts-ignore-next-line */}
            <img className={ styles.image } src={ blankPic } alt={ user.firstname } />
            { /* <Filer /> */ }
          </div>
          <div className={ styles.avatarActions }>
            <Button disabled handleClick={ () => {} }>Choose Image</Button>
            <Button disabled handleClick={ () => {} } variant="danger">Remove Image</Button>
          </div>
        </div>
          <div className={ styles.info }>
              <Input
                fullWidth
                handleChange={(e: ChangeEvent) => handleInputChange(e, "firstname")}
                label="First Name"
                name="firstname"
                value={userInfo.firstname}
              />
              <Input
                fullWidth
                handleChange={(e: ChangeEvent) => handleInputChange(e, "lastname")}
                label="Last Name"
                name="lastname"
                value={userInfo.lastname}
              />
            {/*
              <Select
                disabled
                fullWidth
                handleChange={(e: ChangeEvent) => handleInputChange(e, "country")}
                label="Home country"
                name="country"
                value={userInfo.country}
              /> */}
              <Input
                disabled
                fullWidth
                handleChange={(e: ChangeEvent) => handleInputChange(e, "email")}
                label="E-Mail"
                name="email"
                type="email"
                value={userInfo.email}
              />
              <DatePicker
                format="MM/dd/yyyy"
                handleChange={(date: Date) => setUserInfo((prev) => ({ ...prev, birthday: date }))}
                label="Birthday"
                name="birthday"
                value={userInfo.birthday}
              />
          </div>
          <div className={styles.permissions}>
            <Text size="lg" weight="bold">Sharing Permissions</Text>
            <Checkbox
                handleChange={() => {}}
                label="Others can see my last name"
                name="privateLastName"
                value={userInfo.privateLastName}
              />
              <Checkbox
                handleChange={() => {}}
                label="Others can see my e-mail"
                name="privateEmail"
                value={userInfo.privateEmail}
              />
              <Checkbox
                handleChange={() => {}}
                label="Others can see my birthday"
                name="privateBirthday"
                value={userInfo.birthday}
              />
          </div>
        <div className={ styles.profileActions }>
          <Button handleClick={ () => {} } variant="primary">Save Changes</Button>
        </div>
      </div>
      {renderEditModal}
    </>
  );
};