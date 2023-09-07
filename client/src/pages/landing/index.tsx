import { Button } from "components";
import { Brand, StyledMain, StyledSection, Subtitle, Title } from "./styled";

/* <div className="custom-container landing-container">
      <div className="ui stackable grid">
                    <div className="four column row">

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <img className="feature-icon" alt="Note" src={note} />
                                    </div>
                                    <p className="landing-col-header centered">
                                        Save
                                        <br/>
                                        Important Information
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <img className="feature-icon" alt="Find" src={find} />
                                    </div>
                                    <p className="landing-col-header centered">
                                        Find
                                        <br/>
                                        Activities and Resources
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <img className="feature-icon" alt="Share" src={connect} />
                                    </div>
                                    <p className="landing-col-header centered">
                                        Share
                                        <br/>
                                        With Your Host Family
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="ui fluid card landing-card">
                                <div className="card-content">
                                    <div className="icon-padding centered">
                                        <img className="feature-icon" alt="Cluster" src={friends} />
                                    </div>
                                    <p className="landing-col-header centered">
                                        Get to Know
                                        <br/>
                                        Your Cluster
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */

const Landing = (): JSX.Element => {
  return (
    <StyledMain>
      <StyledSection color="var(--primary_50)">
        <Title as="h1" size="lg"><Brand>On Par</Brand>|<span>The Au Pair&apos;s Assistant</span></Title>
        <Subtitle as="h2" weight="bold">Because taking care of kids is hard enough.</Subtitle>
        <Button link="/home" variant="primary">
          Get Started
          <i className="right arrow icon"></i>
        </Button>
      </StyledSection>
      <StyledSection color="var(--secondary_50)"></StyledSection>
      <StyledSection color="var(--tertiary_50)"></StyledSection>
    </StyledMain>
  );
};

export default Landing;