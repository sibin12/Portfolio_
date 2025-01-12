import React from "react";
import { Button } from "@mui/material";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My Website</h1>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};

export default App;
