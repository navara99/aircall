import React from "react";
import { Alert, AlertTitle } from "@mui/material";

function Empty({ message }) {

  return (
    <Alert severity="info" style={{ color: "white", backgroundColor: "#2ac420" }} sx={{ mt: 1 }} variant="filled">
      <AlertTitle>
        Empty
      </AlertTitle>
      {message}
    </Alert >
  );

};

export default Empty;