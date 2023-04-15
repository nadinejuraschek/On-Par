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
  type = 'text',
  value,
}: IInput ): JSX.Element => {
  return (
    <div className={ `${className} ${styles.field}` }>
      <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
        { label }
      </Text>
      <div className={ styles.iconInputWrapper }>
        <input
          className={ `${ styles.input } ${ error && styles.error } ${ icon && styles.leftPadding }` }
          name={ name }
          onChange={ handleChange }
          placeholder={ placeholder }
          type={type}
          value={ value }
        />
        { icon && <i className={ `${ icon } icon inputIcon` }></i> }
      </div>
      { error && <Text as="p" color="--error_300" size="sm" >{ error }</Text> }
    </div>
  );
}
