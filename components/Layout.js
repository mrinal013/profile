import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    );
  }
}
export default Layout;
