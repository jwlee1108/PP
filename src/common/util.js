function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function isString(target) {
  return getType(target) === 'String';
}

// function isNumber(target) {
//   return getType(target) === 'Number';
// }

// function isBoolean(target) {
//   return getType(target) === 'Boolean';
// }

// function isNull(target) {
//   return getType(target) === 'Null';
// }

// function isUndefined(target) {
//   return getType(target) === 'Undefined';
// }

function isObject(target) {
  return getType(target) === 'Object';
}

function isArray(target) {
  return getType(target) === 'Array';
}

// function isDate(target) {
//   return getType(target) === 'Date';
// }

// function isRegExp(target) {
//   return getType(target) === 'RegExp';
// }

// function isFunction(target) {
//   return getType(target) === 'Function';
// }

export {
  getType,
  isString,
  isArray,
  isObject,
};
