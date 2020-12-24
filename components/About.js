import React from "react";
import Image from "next/image";

class About extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <h1 className="text-center">About</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Image
                src="/mrinal.png"
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </div>
            <div className="col-md-6">
              <h2>Who's this guy?</h2>
              <p>
                I'm an expert WordPress Developer. I have serious passion for
                PHP & JS. Let's make something special.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
