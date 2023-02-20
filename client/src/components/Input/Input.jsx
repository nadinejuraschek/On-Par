import styles from "./input.module.css";
import { Text } from "../Text";

export const Input = ( { error, handleChange, icon, label, name, placeholder = "Type here...", value } ) => (
  <div className={ styles.field }>
    <Text as="label" htmlFor={ name } size="sm">
      { icon && <i className={ `${ icon } icon` }></i> }
      { label }
    </Text>
    <input
      className={ `${ styles.input } ${ error && styles.error }` }
      name={ name }
      onChange={ event => handleChange( event.target.value ) }
      placeholder={ placeholder }
      type="text"
      value={ value }
    />
    { error && <Text as="p" color="--error_300" size="sm" >{ error }</Text> }
  </div>
);
