import { Button } from "components";

export const Landing = () => {
  return (
    <main>
      <h1 className="landing-header">On Par</h1>
      <h1 className="ui header">The Au Pair&apos;s Assistant</h1>
      <h2>Because taking care of kids is hard enough.</h2>
      <div className="more-padding">
        <Button className="start-button" label="Get started" link="/home" variant="primary">
          Get Started
          <i className="right arrow icon"></i>
        </Button>
      </div>
    </main>
  );
};
