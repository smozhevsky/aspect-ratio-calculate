import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({});

export default function OutputTable(props: any) {
  const classes = useStyles();

  return (
    <div>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Number</TableCell>
            <TableCell align="center">Width</TableCell>
            <TableCell align="center">Height</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.results.map((result: any, index: any) => (
            <TableRow key={result}>
              <TableCell align="center" component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="center">{result[0]}</TableCell>
              <TableCell align="center">{result[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}