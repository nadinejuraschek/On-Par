import { Button, Text } from "components";

import styles from "./landing.module.css";

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

export const Landing = (): JSX.Element => {
  return (
    <main className={ styles.flexCentered }>
      <section className={ styles.section } style={ { backgroundColor: "var(--primary_50)" } }>
        <Text as="h1" className={ styles.title } size="lg"><span className={ styles.brand }>On Par</span>|<span>The Au Pair&apos;s Assistant</span></Text>
        <Text as="h2" className={ styles.subtitle } size="xl" weight="bold">Because taking care of kids is hard enough.</Text>
        <Button link="/home" variant="primary">
          Get Started
          <i className="right arrow icon"></i>
        </Button>
      </section>
      <section className={ styles.section } style={ { backgroundColor: "var(--secondary_50)" } }></section>
      <section className={ styles.section } style={ { backgroundColor: "var(--tertiary_50)" } }></section>
    </main>
  );
};
