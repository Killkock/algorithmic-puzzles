// link to the task: https://www.codewars.com/kata/53c235e4d5cd9c397200021d

function deepCompare(obj1, obj2) {
  console.log(obj1, obj2)
  try {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
  } catch (err) {
    return obj1 === obj2;
  }

  for (let i in obj1) {
    if (typeof obj1[i] !== typeof obj2[i]) {
      return false;
    } else if (!(obj1[i] instanceof Object)) {
      if (obj1[i] !== obj2[i]) {
        return false;
      }
    } else if (obj1[i] instanceof Array) {
      if (compareArrays(obj1[i], obj2[i]) === false) {
        return false;
      }
    } else if (obj1[i] instanceof Object) {
      if (deepCompare(obj1[i], obj2[i]) === false) {
        return false;
      }
    }
  }

  return true;
};

function compareArrays(arr1, arr2) {
  arr1.sort();
  arr2.sort();

  if (arr1.length !== arr2.length) {

    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== typeof arr2[i]) {

      return false;
    } else if (arr1[i] instanceof Array) {
      if (compareArrays(arr1[i], arr2[i]) === false) {
        return false;
      }

    } else if (arr1[i] instanceof Object) {
      if (deepCompare(arr1[i], arr2[i]) === false) {
        return false;
      }

    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;

}
