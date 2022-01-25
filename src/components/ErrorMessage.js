import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ErrorMessage({ isTouched, error }) {
  if (isTouched) {
    return (
      <Box>
        <Typography color={"error"}>{error}</Typography>
      </Box>
    );
  }
  return null;
}

export default ErrorMessage;
