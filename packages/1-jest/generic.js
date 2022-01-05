function Generic({
  str,
  bool,
  int,
  fn,
  arr,
  obj
} = {}) {
  this.str = str
  this.bool = bool
  this.int = int
  this.fn = fn
  this.arr = arr
  this.obj = obj
}

module.exports = {
  Generic,
}
