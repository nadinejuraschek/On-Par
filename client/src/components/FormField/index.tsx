import { useMemo } from "react";
import { ErrorText, Field, IconInputWrapper, IconWrapper } from "./styled";
import { IFormField } from "./types";
import { Icon } from "../Icon";
import { Text } from "../Text";

export const FormField = ({
  children,
  className = "",
  error,
  fullWidth = false,
  icon = "",
  label = "",
  name = "",
}: IFormField): JSX.Element => {
  const renderLabel = useMemo(() => {
    if (!label) return null;

    return (
      <Text as="label" htmlFor={ name } size="sm" weight="bold">
        { label }
      </Text>
    );
  }, [label, name]);

  const renderIcon = useMemo(() => {
    if (!icon) return null;

    return (
      <IconWrapper>
        <Icon type={icon} />
      </IconWrapper>
    );
  }, [icon]);

  const renderError = useMemo(() => {
    if (!error) return null;

    return <ErrorText as="p" size="xs" >{ error }</ErrorText>;
  }, [error]);

  return (
    <Field className={className} $fullWidth={fullWidth}>
      {renderLabel}
      <IconInputWrapper>
        {children}
        {renderIcon}
      </IconInputWrapper>
      {renderError}
    </Field>
  );
}