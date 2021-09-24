import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function CancelButton(props) {
  console.log(props);
  const history = useHistory();

  const handeClick = () => {
    history.push("/");
  };

  return (
    <Button
      onClick={() => handeClick()}
      className="mx-2"
      type="button"
      variant="light"
    >
      Cancel
    </Button>
  );
}

export default CancelButton;
