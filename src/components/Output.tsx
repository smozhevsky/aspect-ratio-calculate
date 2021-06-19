import React from "react";
import OutputTable from "./output/OutputTable";
import { OutputList } from "./output/OutputList";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  withMediaQuery: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
});

export default function Output(props: any) {
  const classes = useStyles();
  const matches: boolean = useMediaQuery("(min-width:600px)");

  if (matches) {
    return (
      <div className={classes.withMediaQuery}>
        <OutputTable results={props.results} />
        <OutputList results={props.results} />
      </div>
    );
  }
  return (
    <>
      <div>
        <OutputTable results={props.results} />
        <OutputList results={props.results} />
      </div>
    </>
  );
}
