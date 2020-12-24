import React from "react";
import Image from "next/image";

class Projects extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-cross">
        <div className="container">
          <h1 className="text-center">Outstanding Websites</h1>
          <div className="row">
            <div className="col-md-4 p-5">
              <Image
                src="/osm.png"
                alt="Picture of the author"
                layout="responsive"
                width="400"
                height="300"
              />
            </div>
            <div className="col-md-4 p-5">
              <Image
                src="/ryc.png"
                alt="Picture of the author"
                layout="responsive"
                width="400"
                height="300"
              />
            </div>
            <div className="col-md-4 p-5">
              <Image
                src="/omc.png"
                alt="Picture of the author"
                layout="responsive"
                width="400"
                height="300"
              />
            </div>
            <div className="col-md-4 p-5">
              <Image
                src="/mlf.png"
                alt="Picture of the author"
                layout="responsive"
                width="400"
                height="300"
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .bg-cross {
            background: url("line-transparent-png-20.png");
          }
        `}</style>
      </div>
    );
  }
}
export default Projects;
