import { Header, Resources as ResourcesList } from "components";
import { StyledContent } from "./styled";

const Resources = (): JSX.Element => (
  <>
    <Header pageTitle="Resources" />
    <StyledContent>
      <ResourcesList />
    </StyledContent>
  </>
);

export default Resources;