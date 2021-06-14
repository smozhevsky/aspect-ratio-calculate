import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItems: {
      listStyleType: "none",
    },
  })
);

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
