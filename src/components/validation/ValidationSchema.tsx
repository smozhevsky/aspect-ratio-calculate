import * as Yup from "yup";

let ValidationSchema = Yup.object().shape({
  width: Yup.number().required().positive().integer(),
  height: Yup.number().required().positive().integer(),
  maxWidth: Yup.number().required().positive().integer().max(1000000),
});

export default ValidationSchema;
