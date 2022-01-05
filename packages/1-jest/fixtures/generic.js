const ctorArgs = {
  str: 'today',
  int: 42,
  bool: true,
  fn: (arg) => console.log(arg),
  arr: [6, 1, 2022],
  obj: {
    date: '6th',
    month: 'Jan',
    year: 2022,
  } 
}

module.exports = {
  ctorArgs,
}
