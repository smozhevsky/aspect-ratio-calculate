import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  listItems: {
    listStyleType: "none",
    textAlign: "center",
  },
});

export const OutputList = (props: any) => {
  const classes = useStyles();

  return (
    <div>
      {props.results.map((result: any, index: any) => (
        <ul className={classes.listItems}>
          <li>{`№${index + 1}--${result[0]}/${result[1]}`}</li>
        </ul>
      ))}
    </div>
  );
};
