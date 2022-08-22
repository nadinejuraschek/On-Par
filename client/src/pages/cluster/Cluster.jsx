import { AuPairInfo } from "./AuPairInfo";
import { CounselorInfo } from "./CounselorInfo";

export const Cluster = () => (
  <main>
    <div className="ui vertical center aligned segment nav-push middle-aligned">
      <h2>My Cluster</h2>
      <div className="ui stackable grid">
        <div className="row">
          <div className="eight wide column">
            <CounselorInfo />
          </div>

          <div className="eight wide column">
            <div className="ui card">
              <div className="content">
                <div className="ui medium header">
                  Au Pairs in Your Cluster
                </div>
                <div className="ui relaxed divided list">
                  <AuPairInfo />
                  <AuPairInfo />
                  <AuPairInfo />
                  <AuPairInfo />
                  <AuPairInfo />
                  <AuPairInfo />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui divider"></div>

        <div className="row">
          <div className="four wide column">
            <div className="ui card">
              <div className="content">
                <div className="ui medium header">
                  <a href="/cluster">My Area</a>
                </div>
                <div className="meta">Coming Soon</div>
              </div>
            </div>
          </div>

          <div className="four wide column">
            <div className="ui card">
              <div className="content">
                <div className="ui medium header">
                  <a href="/cluster">Education</a>
                </div>
                <div className="meta">Coming Soon</div>
              </div>
            </div>
          </div>

          <div className="four wide column">
            <div className="ui card">
              <div className="content">
                <div className="ui medium header">
                  <a href="/cluster">Travel</a>
                </div>
                <div className="meta">Coming Soon</div>
              </div>
            </div>
          </div>

          <div className="four wide column">
            <div className="ui card">
              <div className="content">
                <div className="ui medium header">
                  <a href="/cluster">Resources</a>
                </div>
                <div className="meta">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
