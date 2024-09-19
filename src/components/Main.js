import React from 'react';

const Main = () => {
  return (
    <React.Fragment>
      <main>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              {/* Doctors Widget */}
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg1">
                    <i className="fa fa-users" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>98</h3>
                    <span className="widget-title1">
                      Total Members <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Patients Widget */}
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg2">
                    <i className="fa fa-users" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>1072</h3>
                    <span className="widget-title2">
                      Active Members <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Attend Widget */}
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg3">
                    <i className="fa fa-users" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>72</h3>
                    <span className="widget-title3">
                      Inactive Members <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Pending Widget */}
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg4">
                    <i className="fa fa-level-up" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>618</h3>
                    <span className="widget-title4">
                      Total Level Bonus <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg1">
                    <i className="fa fa-map-pin" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>98</h3>
                    <span className="widget-title1">
                      Available Epin <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Patients Widget */}
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg2">
                    <i className="fa fa-map-pin" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>1072</h3>
                    <span className="widget-title2">
                      Used Epin <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Attend Widget */}
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg3">
                    <i className="fa fa-money" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>72</h3>
                    <span className="widget-title3">
                      Pending Withdrawals <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Pending Widget */}
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg4">
                    <i className="fa fa-money" aria-hidden="true" />
                  </span>
                  <div className="dash-widget-info text-right">
                    <h3>618</h3>
                    <span className="widget-title4">
                      Paid Withdrawals <i className="fa fa-check" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
