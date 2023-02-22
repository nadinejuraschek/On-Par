import { ChangeEvent } from 'react';
import { IInput } from "./types";
import { Text } from "../Text";
import styles from "./input.module.css";

export const Input = ( {
  className = '',
  error,
  handleChange,
  icon,
  label,
  name,
  placeholder = "Type here...",
  value,
}: IInput ): JSX.Element => (
  <div className={ styles.field }>
    <Text as="label" htmlFor={ name } size="sm">
      <>
        { icon && <i className={ `${ icon } icon` }></i> }
        { label }
      </>
    </Text>
    <input
      className={ `${ styles.input } ${ error && styles.error }` }
      name={ name }
      onChange={ (event: ChangeEvent) => handleChange( (event.target as HTMLInputElement).value ) }
      placeholder={ placeholder }
      type="text"
      value={ value }
    />
    { error && <Text as="p" color="--error_300" size="sm" >{ error }</Text> }
  </div>
);
