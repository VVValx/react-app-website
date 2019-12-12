import React from "react";
import AuthHoc from "../../hoc/AuthHoc";

function About(props) {
  return (
    <AuthHoc {...props}>
      <div className="">
        <header className="main-header">
          <h1>About page</h1>
        </header>
      </div>
    </AuthHoc>
  );
}

export default About;
