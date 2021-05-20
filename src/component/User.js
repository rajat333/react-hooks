import React from "react";
import { useHistory } from "react-router-dom";

function User() {
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.goBack()}>Back</button>

      <p>Welcome To User PAGE</p>
    </>
  );
}

export default User;
