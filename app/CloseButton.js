"use client";
import React from "react";
import { Button } from "@mui/material";
export function CloseButton({ handleClose }) {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={handleClose}
      sx={{
        marginTop: "16px",
      }}
    >
      Close
    </Button>
  );
}
