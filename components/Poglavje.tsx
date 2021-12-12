import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type PoglavjeProps = {
  children?: React.ReactNode;
  naslov?: string;
  level?: number;
};

const Poglavje = ({ children, naslov, level = 0 }: PoglavjeProps) => {
  const children_with_props = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { level: level + 1 });
    }
    return child;
  });

  let spremenjen_naslov: React.ReactNode;
  switch (level) {
    case 0:
      spremenjen_naslov = <Typography variant="h3">{naslov}</Typography>;
      break;
    case 1:
      spremenjen_naslov = <Typography variant="h4">{naslov}</Typography>;
      break;
    case 2:
      spremenjen_naslov = <Typography variant="h5">{naslov}</Typography>;
      break;
    default:
      spremenjen_naslov = <Typography variant="h6">{naslov}</Typography>;
      break;
  }

  let name = naslov?.split(" ").join("_");

  return (
    <Box sx={{ padding: "10px" }} id={name ? encodeURIComponent(name) : ""}>
      <br />
      {spremenjen_naslov}
      <Typography>{children_with_props}</Typography>
    </Box>
  );
};

export default Poglavje;
