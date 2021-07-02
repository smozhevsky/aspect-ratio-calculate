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

let url =
  "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new";

export async function getParams() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
}
