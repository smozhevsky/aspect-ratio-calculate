import * as React from "react";
import { Field, Form, Formik } from "formik";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ValidationSchema from "./validation/ValidationSchema";
import { getParams } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: "10px",
  },
  validationError: {
    color: "red",
  },
  inputStyle: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #000",
    borderRadius: "3px",
    textAlign: "center",
  },
}));

const INITIAL_VALUES = {
  width: getParams(),
  height: "",
  maxWidth: "",
};

export type VALUES = typeof INITIAL_VALUES;

interface IProps {
  onSubmit: (values: VALUES) => void;
}

const AspectForm = ({ onSubmit }: IProps) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={ValidationSchema}
    >
      {({ errors, touched }) => (
        <Form className={classes.form}>
          <Grid
            className={classes.paper}
            container
            direction="column"
            alignItems="center"
          >
            <Field
              name="width"
              placeholder="width"
              className={classes.inputStyle}
            />
            {errors.width && touched.width && (
              <div className={classes.validationError}>{errors.width}</div>
            )}
            <Field
              name="height"
              placeholder="height"
              className={classes.inputStyle}
            />
            {errors.height && touched.height && (
              <div className={classes.validationError}>{errors.height}</div>
            )}
            <Field
              name="maxWidth"
              placeholder="maxWidth"
              className={classes.inputStyle}
            />
            {errors.maxWidth && touched.maxWidth && (
              <div className={classes.validationError}>{errors.maxWidth}</div>
            )}
            <Button type="submit" variant="contained" color="primary">
              Calculate
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AspectForm;
