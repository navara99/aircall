import React from "react";
import { CircularProgress } from "@mui/material";
import "./css/loading.css";

function Loading() {

  return (
    <div className="loading-wrapper">
      <CircularProgress />
    </div>
  )
};

export default Loading;