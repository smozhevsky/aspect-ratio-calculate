import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
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
  const [open, setOpen] = React.useState(false);
  const [results, setResults] = React.useState([]);

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
      {/* TODO: useMediaQuery 
                разобраться с Grid компонентом*/}
      {results.length > 0 && (
        <Grid
          container
          className={classes.container}
          spacing={1}
          justify="center"
        >
          <Grid container item sm={12} md={6} justify="center">
            <OutputTable results={results} />
          </Grid>
          <Grid container item sm={12} md={6} justify="center">
            <OutputList results={results} />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
}

export default App;
