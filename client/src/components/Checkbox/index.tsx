import { ICheckbox } from './types';
import { Text } from 'components';
import styles from './checkbox.module.css';

export const Checkbox = ({
  className = '',
  error,
  handleChange,
  label,
  name,
  value,
}: ICheckbox): JSX.Element => {
  return (
    <div className={ `${className} ${styles.field}` }>
      <input
        className={ `${ styles.input } ${ error && styles.error }` }
        checked={value}
        name={ name }
        onChange={ handleChange }
        type="checkbox"
      />
      <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
        { label }
      </Text>
      { error && <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text> }
    </div>
  );
}