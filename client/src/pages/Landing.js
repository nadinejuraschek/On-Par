// ICONS
// import note from '../../images/edit.svg';
// import find from '../../images/find.svg';
// import friends from '../../images/trust.svg';
// import connect from '../../images/team.svg';

const Landing = () => {
  return (
    <>
      <div className="ui vertical masthead center aligned segment">
        <main>
          <h1 className="landing-header">On Par</h1>
          <h1 className="ui header">The Au Pair&apos;s Assistant</h1>
          <h2 className="tagline">
            Because taking care of kids is hard enough.
          </h2>
          <div className="more-padding">
            <a href="/home" className="start-button">
              Get Started
              <i className="right arrow icon"></i>
            </a>
          </div>
        </main>
      </div>

      { /* <div className="custom-container landing-container">
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
            </div> */ }
    </>
  );
};

export default Landing;
