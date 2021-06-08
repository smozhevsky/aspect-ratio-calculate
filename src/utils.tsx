export const getAspectRatio = (
  width: number,
  height: number,
  maxWidth: number
) => {
  let ratioResult: any = [];
  let initialRatio: number = width / height;
  let ratioHeight: number;
  for (width; width <= maxWidth; width++) {
    ratioHeight = width / initialRatio;

    if (Number.isInteger(ratioHeight)) {
      ratioResult.push([width, ratioHeight]);
    }
  }
  console.log(initialRatio);
  console.dir(ratioResult);

  return ratioResult;
};
