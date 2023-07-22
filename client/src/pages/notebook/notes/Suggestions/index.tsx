import { Text } from "components";
import { StyledCard } from "./styled";

export const Suggestions = (): JSX.Element => (
  <StyledCard>
    <Text as="h4" size="md" weight="bold">A space for you to write down your thoughts and special memories.</Text>
    <Text as="h5" size="md" weight="bold">Ideas:</Text>
    <Text as="p" size="sm">I am homesick. I miss ...</Text>
    <Text as="p" size="sm">
      I discovered a new favorite food / place / hobby of mine
    </Text>
    <Text as="p" size="sm">
      Things my host kids said to me today
    </Text>
  </StyledCard>
);