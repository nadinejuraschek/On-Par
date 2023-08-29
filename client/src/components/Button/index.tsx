import { useMemo } from "react";
import { Loader, StyledButton, StyledLink } from "./styled";

import { IButton } from "./types";

export const Button = ({
  align = "alignCenter",
  children,
  className = "",
  disabled = false,
  fullWidth = false,
  handleClick,
  label = "",
  link,
  loading = false,
  round = false,
  square = false,
  type = "button",
  variant = "secondary",
}: IButton): JSX.Element => {
  const renderLabel = useMemo(() => {
    if (loading) return <Loader />;

    return children;
  }, [children, loading]);

  if (link) {
    return (
      <StyledLink
        $align={align}
        aria-label={ label }
        className={className}
        disabled={disabled}
        $fullWidth={fullWidth}
        $round={round}
        $square={square}
        to={link}
        $variant={variant}
      >
        { renderLabel }
      </StyledLink>
    );
  }

  return (
    <StyledButton
      $align={align}
      aria-label={ label }
      className={className}
      disabled={disabled}
      $fullWidth={fullWidth}
      onClick={ handleClick }
      $round={round}
      $square={square}
      type={ type }
      $variant={variant}
    >
      { renderLabel }
    </StyledButton>
  );
};
