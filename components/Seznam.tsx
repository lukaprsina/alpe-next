import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import Router from "next/router";

type SeznamProps = {
  seznam: {
    title: string;
    name: string;
    children?: SeznamProps;
    pad?: number;
  }[];
};

const Seznam = ({ seznam }: SeznamProps) => {
  const handleClick = (title: string) => {
    // TODO
    let name = title.split("\t")[1];
  };

  seznam.map((item) => {
    if (item && !item.pad) {
      item.pad = 0;
    }
    if (item && item.children) {
      item.children.map((child) => {
        child.pad = item.pad + 4;
      });
    }
  });

  return (
    <List>
      {seznam.map((item) => {
        return (
          <>
            <ListItemButton
              onClick={() => handleClick(item.title)}
              dense
              sx={{ pl: item.pad }}
            >
              <ListItemText primary={item ? item.title : ""} />
            </ListItemButton>
            {item && item.children && <Seznam seznam={item.children} />}
          </>
        );
      })}
    </List>
  );
};

export default Seznam;
