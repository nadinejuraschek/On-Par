import { FeatureCard } from "components";
import { notebookFeatures } from "data";
import { StyledContent } from "./styled";

const Notebook = (): JSX.Element => (
  <StyledContent>
    {
      notebookFeatures.map( ( feature, index ) => (
        <FeatureCard
          header={ feature.header }
          icon={ feature.icon }
          key={ index }
          link={ feature.link }
          title={ feature.title }
        />
      ) )
    }
  </StyledContent>
);

export default Notebook;