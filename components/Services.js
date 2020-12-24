import React from "react";
import Icon from "@mdi/react";
import {
  mdiResponsive,
  mdiRocketLaunch,
  mdiSpeedometer,
  mdiStandardDefinition,
} from "@mdi/js";

class Services extends React.Component {
  render() {
    return (
      <div className="container mt-5 pt-5">
        <div className="row text-center">
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <Icon path={mdiResponsive} size={2} color="#000000" />
                <h5 className="card-title">Responsive</h5>
                <p className="card-text">
                  Website will work on any device, big or small.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <Icon path={mdiRocketLaunch} size={2} color="#000000" />
                <h5 className="card-title">Dynamic</h5>
                <p className="card-text">
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <Icon path={mdiSpeedometer} size={2} color="#000000" />
                <h5 className="card-title">Fast</h5>
                <p className="card-text">
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-0">
              <div className="card-body">
                <Icon path={mdiStandardDefinition} size={2} color="#000000" />
                <h5 className="card-title">Standard Code</h5>
                <p className="card-text">That's my style.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
