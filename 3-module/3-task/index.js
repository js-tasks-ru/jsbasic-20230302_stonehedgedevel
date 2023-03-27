function camelize(str) {
  let string = str.split('-');
  let newStr = '';

  string.forEach((el, index) => {
    if (index !== 0) {
      el = el.charAt(0).toUpperCase() + el.slice(1);
    }
    newStr = newStr + el;
  });

  return newStr;
}
