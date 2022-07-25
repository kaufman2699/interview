import React from "react";
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper";

import { SearchBar } from "../../components/SearchBar";

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 256,
          height: 256,
          padding: 8,
        }
      }}
    >
      <Paper square>
        Welcome! Search for a client in the text box below!
        <SearchBar />
      </Paper>
    </Box>
  )
};

export { Home };
