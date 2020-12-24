import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <ul className="list-group">
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">WordPress</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">PHP</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">JS</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">CSS</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">React JS</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">Vue JS</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">SCSS</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">Git</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    40%
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item border-0">
            <div className="row">
              <div className="col-3 text-right">Webpack</div>
              <div className="col-9">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    40%
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <style jsx>{`
          .progress {
            border: 1px solid #000000;
            border-radius: 0;
          }
          .progress-bar {
            background-color: #000000;
          }
        `}</style>
      </div>
    );
  }
}
export default Skills;
