import React from "react";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push("/user", { from: "AboutPage" })}>
        Move to User
      </button>

      <p>Welcome To ABOUT PAGE</p>
    </>
  );
}

export default About;
