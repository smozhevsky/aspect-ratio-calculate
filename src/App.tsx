import React from "react";
import AspectForm from "./components/AspectForm";
import DialogModal from "./components/dialog/DialogModal";
import OutputTable from "./components/OutputTable";
import { getAspectRatio } from "./utils";

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

  return (
    <React.Fragment>
      <AspectForm onSubmit={handleOnSubmit} />
      <DialogModal open={open} onClose={handleClose} results={results} />
      {/* // вывод результата в Table mui */}
      <OutputTable results={results} />
    </React.Fragment>
  );
}

export default App;
