import { IText } from "./types";
import { StyledText } from './styled';

export const Text = ({
  as,
  children,
  className = "",
  color = "--grey_700",
  htmlFor = "",
  size = "md",
  weight = "regular",
}: IText): JSX.Element => (
  <StyledText
    as={as}
    className={className}
    color={color}
    htmlFor={htmlFor}
    size={size}
    weight={weight}
  >
    { children }
  </StyledText>
);
