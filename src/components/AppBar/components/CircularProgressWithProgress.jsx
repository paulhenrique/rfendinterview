import { Box, CircularProgress, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { getPercent } from "@/pages/Score/components/QuizCard";

const CircularProgressWithProgress = ({ score = 0, total = 0 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        size={80}
        sx={{ color: green["600"] }}
        value={getPercent(score, total)}
      />
      <Typography sx={{ position: "absolute" }}>
        {`${score}/${total}`}
      </Typography>
    </Box>
  );
};

export default CircularProgressWithProgress;
