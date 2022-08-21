const HostFamily = () => {
  return (
    <main>
      <div className="ui vertical center aligned segment nav-push middle-aligned">
        <div className="ui container">
          <h2 className="ui header">My Host Family</h2>

          <div className="ui two column grid">
            <div className="column">
              <div className="ui card notebook-card">
                <div className="content">
                  <div className="ui medium header">
                    <a href="/hostfamily/info">Info</a>
                  </div>
                  <div className="meta">Coming Soon</div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="ui card notebook-card">
                <div className="content">
                  <div className="ui medium header">
                    <a href="/hostfamily/calendar">Calendar</a>
                  </div>
                  <div className="meta">Coming Soon</div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="ui card notebook-card">
                <div className="content">
                  <div className="ui medium header">
                    <a href="/hostfamily/diary">Diary</a>
                  </div>
                  <div className="meta">Coming Soon</div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="ui card notebook-card">
                <div className="content">
                  <div className="ui medium header">
                    <a href="/hostfamily/tips">Tips</a>
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
};

export default HostFamily;
