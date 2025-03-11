function analyzeArray(array) {
  const obj = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  obj.length = array.length;
  obj.min = array.reduce((min, curr) => (min < curr ? min : curr), array[0]);
  obj.max = array.reduce((max, curr) => (max > curr ? max : curr), array[0]);
  obj.average = array.reduce((total, curr) => (total += curr), 0) / obj.length;

  return obj;
}

module.exports = analyzeArray;
