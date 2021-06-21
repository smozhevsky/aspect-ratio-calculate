// import { useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import AspectForm, { VALUES } from "./components/AspectForm";
import DialogModal from "./components/dialog/DialogModal";
import { getAspectRatio } from "./utils/utils";
import Output from "./components/Output";

export type Ratio = [number, number];

function App() {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<Ratio[]>([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSubmit = ({ width, height, maxWidth }: VALUES) => {
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
