function getMinMax(str) {
  let splittedString = str.split(' '),
    numbers = [],
    resultObject = {};

  splittedString.forEach((number) => {
    if (Number(number)) numbers.push(Number(number));
  });

  resultObject.min = Math.min(...numbers);
  resultObject.max = Math.max(...numbers);

  return resultObject;
}
