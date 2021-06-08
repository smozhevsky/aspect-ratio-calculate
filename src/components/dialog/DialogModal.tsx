import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DialogModal(props: any) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">aspect ratio result</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.results.length}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
