import { IToggleGroup } from "./types";
import { Text } from 'components';
import styles from './toggleGroup.module.css';
import { useMemo } from "react";

export const ToggleGroup = ({
  className = '',
  error,
  handleChange,
  label,
  name,
  options,
  value,
}: IToggleGroup): JSX.Element => {
  const renderToggles = useMemo(() => {
    return options.map((option, index) => {
      // TODO: implement icon
      const isSelected = value === option.value;
      return (
        <div
          className={ `${styles.toggle} ${isSelected ? styles.selected : ''}` }
          key={index}
          onClick={() => handleChange(option.value)}
        >
          {option.label && (
            <Text
              color="--primary_600"
              size="sm"
              weight={isSelected ? 'bold' : 'regular'}
            >
              {option.label}
            </Text>
          )}
        </div>
      );
    });
  }, [handleChange, options, value]);

  return (
    <div className={ `${className} ${styles.field} ${label ? styles.withLabel : ''}` }>
      {label && (
        <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
          { label }
        </Text>
      )}
      <div className={ styles.group }>
        {renderToggles}
      </div>
      { error && <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text> }
    </div>
  );
}