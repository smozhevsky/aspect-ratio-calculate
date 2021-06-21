import React from "react";
import OutputTable from "./output/OutputTable";
import { OutputList } from "./output/OutputList";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { Ratio } from "../App";

const useStyles = makeStyles({
  withMediaQuery: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
  // +add container
});

interface IOutputProps {
  results: Ratio[];
}

export default function Output({ results }: IOutputProps) {
  const classes = useStyles();
  const matches: boolean = useMediaQuery("(min-width:600px)");

  return (
    <div className={matches ? classes.withMediaQuery : undefined}>
      <OutputTable results={results} />
      <OutputList results={results} />
    </div>
  );
}

// + addEventListener('resize')...
// + css (scss)
// + values of randomizer fetch (0-100)
