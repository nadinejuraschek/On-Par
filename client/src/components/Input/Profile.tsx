import { ChangeEvent } from 'react';
import { IProfileInput } from "./types";
import styles from "./input.module.css";

export const ProfileInput = ( { edit, handleChange, icon, label, name, value }: IProfileInput ): JSX.Element => (
  <div className={ styles.field }>
    <label className={ styles.label } htmlFor={ name }>
      { icon && <i className={ `${ icon } icon` }></i> }
      { label }:
    </label>
    <p className={ edit === true ? styles.hide : "" }>{ value }</p>
    <input
      className={ edit === true ? styles.profileInput : styles.hide }
      type="text"
      name={ name }
      placeholder={ value }
      value={ value }
      onChange={ (event: ChangeEvent) => handleChange( (event.target as HTMLInputElement).value ) }
    />
  </div>
);
