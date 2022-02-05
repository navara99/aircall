import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import "../../css/loading.css";

function Loading({ message }) {

  return (
    <div className="loading-wrapper">
      <Typography variant="h6" sx={{ pb: 2 }}>{message}</Typography >
      <CircularProgress style={{ color: "#2ac420" }} />
    </div>
  )
};

export default Loading;