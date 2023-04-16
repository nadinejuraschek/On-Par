import { ChangeEvent } from 'react';
import { IInput } from "./types";
import { Text } from "../Text";
import styles from "./input.module.css";

export const Input = ( {
  className = '',
  error,
  fullWidth = false,
  handleChange,
  icon,
  label,
  name,
  placeholder = "Type here...",
  type = 'text',
  value,
}: IInput ): JSX.Element => (
  <div className={ `${className} ${styles.field}` }>
    <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
      { label }
    </Text>
    <div className={ styles.iconInputWrapper }>
      <input
        className={ `${ styles.input } ${ error && styles.error } ${ fullWidth && styles.fullWidth } ${ icon && styles.leftPadding }` }
        name={ name }
        onChange={ handleChange }
        placeholder={ placeholder }
        type={type}
        value={ value }
      />
      { icon && <i className={ `${ icon } icon inputIcon` }></i> }
    </div>
    { error && <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text> }
  </div>
);
