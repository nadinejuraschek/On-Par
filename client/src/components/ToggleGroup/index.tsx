import { Text } from "components";
import { useMemo } from "react";
import { Field, Group, Toggle } from "./styled";

import { IToggleGroup } from "./types";

export const ToggleGroup = ({
  className = "",
  error,
  handleChange,
  label,
  name,
  options,
  value,
}: IToggleGroup): JSX.Element => {
  const renderLabel = useMemo(() => {
    if (!label) return null;

    return (
      <Text as="label" htmlFor={ name } size="sm">
        { label }
      </Text>
    );
  }, [label, name]);

  const renderError = useMemo(() => {
    if (!error) return null;

    return <Text as="p" color="--error_300" size="xs" >{ error }</Text>;
  }, [error]);

  const renderToggles = useMemo(() => {
    return options.map((option, index) => {
      // TODO: implement icon
      const isSelected = value === option.value;
      return (
        <Toggle
          key={index}
          onClick={() => handleChange(option.value)}
          isSelected={isSelected}
        >
          {option.label && (
            <Text
              color="--primary_600"
              size="sm"
              weight={isSelected ? "bold" : "regular"}
            >
              {option.label}
            </Text>
          )}
        </Toggle>
      );
    });
  }, [handleChange, options, value]);

  return (
    <Field className={className} withLabel={Boolean(label)}>
      {renderLabel}
      <Group>
        {renderToggles}
      </Group>
      {renderError}
    </Field>
  );
}