import { Button, Checkbox, DatePicker, Input, Text } from 'components';
import { ChangeEvent, useCallback, useState } from 'react';

import { TUser } from 'contexts/UserContext/types';
import axios from 'axios';
import blankPic from "images/blankProfile.svg";
import styles from './userInfo.module.css';
import { toast } from "react-toastify";

export const UserInfo = ({ user }: { user: TUser }): JSX.Element => {
  const [updating, setUpdating] = useState(false);

  const [userInfo, setUserInfo] = useState({
    birthday: user?.birthday || undefined,
    email: user?.email || undefined,
    firstname: user?.firstname || undefined,
    lastname: user?.lastname || undefined,
    location: user?.location || undefined,
    permissions: {
      shareBirthday: user?.permissions?.shareBirthday || false,
      shareEmail: user?.permissions?.shareEmail || false,
      shareLastName: user?.permissions?.shareLastName || false,
    },
  });

  const handleEdit = useCallback(() => {
    setUpdating(true);

    axios.put( "/api/user/" + user._id, {
      birthday: userInfo.birthday,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      permissions: {
        shareBirthday: userInfo.permissions.shareBirthday,
        shareEmail: userInfo.permissions.shareEmail,
        shareLastName: userInfo.permissions.shareLastName,
      },
    } ).then( () => {
      toast.success('Profile updated successfully!');
    } ).catch( err => {
      console.log( "Error: ", err );
      toast.error('There was an error when updating your profile. Please try again later.');
    } ).finally( () => setUpdating( false ));

  }, [user, userInfo]);

  const handleInputChange = useCallback((e: ChangeEvent, field: string) => {
    const value = (e.target as HTMLInputElement).value;
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleCheckboxChange = useCallback((e: ChangeEvent, field: string) => {
    const value = (e.target as HTMLInputElement).checked;
    setUserInfo((prev) => ({ ...prev, permissions: { ...prev.permissions, [field]: value } }));
  }, []);

  return (
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
            handleChange={(e: ChangeEvent) => handleCheckboxChange(e, 'shareLastName')}
            label="Others can see my last name"
            name="shareLastName"
            value={userInfo.permissions.shareLastName}
          />
          <Checkbox
            handleChange={(e: ChangeEvent) => handleCheckboxChange(e, 'shareEmail')}
            label="Others can see my e-mail"
            name="shareEmail"
            value={userInfo.permissions.shareEmail}
          />
          <Checkbox
            handleChange={(e: ChangeEvent) => handleCheckboxChange(e, 'shareBirthday')}
            label="Others can see my birthday"
            name="shareBirthday"
            value={userInfo.permissions.shareBirthday}
          />
        </div>
      <div className={ styles.profileActions }>
        <Button handleClick={handleEdit} loading={updating} variant="primary">Save Changes</Button>
      </div>
    </div>
  );
};