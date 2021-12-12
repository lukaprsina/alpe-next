import { Box } from "@mui/system";
import React from "react";

type KartaProps = {
  children: React.ReactNode;
  poravnava: "left" | "none" | "right";
};

const Karta = ({ children, poravnava }: KartaProps) => {
  return (
    <>
      <Box
        sx={{
          float: poravnava,
          clear: poravnava,
          backgroundColor: "#f9f9f9",
          margin: "10px",
          padding: "10px",
          display: "border-box"
        }}
      >
        {children}
      </Box>
      <br />
    </>
  );
};

export default Karta;
