import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

function About(props) {
  const history = useHistory();
  let { id } = useParams();
  console.log("props ", props);
  return (
    <>
      <button onClick={() => history.push("/user", { from: "AboutPage" })}>
        Move to User
      </button>

      <p>Welcome To ABOUT PAGE</p>
      <h2>Id is {id}</h2>
    </>
  );
}

export default About;
