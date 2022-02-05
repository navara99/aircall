import React from "react";
import { CircularProgress } from "@mui/material";
import "./css/loading.css";

function Loading() {

  return (
    <div className="loading-wrapper">
      <CircularProgress style={{ color: "#2ac420" }} />
    </div>
  )
};

export default Loading;