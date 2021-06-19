// import { useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import AspectForm from "./components/AspectForm";
import DialogModal from "./components/dialog/DialogModal";
import { getAspectRatio } from "./utils/utils";
import Output from "./components/Output";

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

  return (
    <React.Fragment>
      <AspectForm onSubmit={handleOnSubmit} />
      <DialogModal open={open} onClose={handleClose} results={results} />

      {/* + useMediaQuery */}

      {results.length > 0 && <Output results={results} />}
    </React.Fragment>
  );
}

export default App;
