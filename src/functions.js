/* eslint-disable no-extend-native */
Array.prototype.myPush = function (item) {
  const arr = this;
  arr[arr.length] = item;
};

Array.prototype.myFlat = function () {
  const arr = this;
  let newArr = [];
  recFlat(arr);
  function recFlat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        recFlat(arr[i]);
        continue;
      }
      newArr.myPush(arr[i]);
    }
  }
  return newArr;
};

Array.prototype.myForEach = function (callback) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};

Array.prototype.myMap = function (callback) {
  const arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i], i);
  }
  return newArr;
};

Array.prototype.myIndexOf = function (item) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
};

Array.newMatrix = function (number) {
  const newArray = [];
  for (let i = 0; i < number; i++) {
    newArray[i] = [];
  }
  return newArray;
};

Array.prototype.myDeepFill = function (item) {
  const arr = this;
  const newArr = [];
  fill(arr);
  function fill(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArr.push([]);
        for (let y = 0; y < arr[i].length; y++) {
          newArr[i][y] = item;
        }
        continue;
      }
      newArr[i] = item;
    }
  }
  return newArr;
};


Array.prototype.myTypeGroup = function (arrOfType = ['number', 'string', 'other']) {
  const arr = this;
  const newArr = Array.newMatrix(arrOfType.length);
  for (let i = 0; i < arr.length; i++) {
    const index = arrOfType.myIndexOf(typeof arr[i]) ?? newArr.length - 1;
    newArr[index].myPush(arr[i]);
  }
  return newArr;
};
