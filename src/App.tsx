import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import AspectForm from "./components/AspectForm";
import DialogModal from "./components/dialog/DialogModal";
import { OutputList } from "./components/output/OutputList";
import OutputTable from "./components/output/OutputTable";
import { getAspectRatio } from "./utils/utils";

const useStyles = makeStyles({
  container: {
    marginTop: "50px",
  },
});

function App() {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSubmit = ({ width, height, maxWidth }: any) => {
    setOpen(true);
    setResults(getAspectRatio(+width, +height, +maxWidth));
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <AspectForm onSubmit={handleOnSubmit} />
      <DialogModal open={open} onClose={handleClose} results={results} />
      {/* + useMediaQuery */}
      {/* TODO: useMediaQuery
                разобраться с Grid компонентом*/}
      {results.length > 0 && (
        <Grid
          container
          direction="row"
          className={classes.container}
          spacing={1}
          justify="center"
          alignItems="center"
        >
          <Grid item sm={12} md={6}>
            <OutputTable results={results} />
          </Grid>
          <Grid item sm={4} md={2}>
            <OutputList results={results} />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default App;
