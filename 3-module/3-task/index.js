function camelize(str) {
  return str.split('-').map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1)).join('');
}
