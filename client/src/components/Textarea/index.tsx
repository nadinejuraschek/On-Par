import { ITextarea } from "./types";
import { Text } from "components";
import styles from "./textarea.module.css";

export const Textarea = ({
  className = '',
  error,
  fullWidth = false,
  handleChange,
  label,
  name,
  placeholder = "Type here...",
  rows = 5,
  value,
}: ITextarea): JSX.Element => {
  return (
    <div className={ `${className} ${styles.field}` }>
      <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
        { label }
      </Text>
      <textarea
        className={ `${ styles.input } ${ error && styles.error } ${ fullWidth && styles.fullWidth }` }
        name={ name }
        onChange={ handleChange }
        placeholder={ placeholder }
        rows={rows}
        value={ value }
      />
      { error && <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text> }
    </div>
  );
};
