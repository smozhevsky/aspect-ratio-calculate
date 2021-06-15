import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  listItems: {
    listStyleType: "none",
  },
  listStyle: {
    border: "1px solid black",
  },
});

export const OutputList = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.listStyle}>
      {props.results.map((result: any, index: any) => (
        <ul className={classes.listItems}>
          <li>{`№${index + 1}--${result[0]}/${result[1]}`}</li>
        </ul>
      ))}
    </div>
  );
};
